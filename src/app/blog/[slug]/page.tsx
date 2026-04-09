import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { renderMarkdown } from "@/lib/markdown";
import ArticleCard from "@/components/ArticleCard";
import AdPlaceholder from "@/components/AdPlaceholder";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata(
  props: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author.name }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: article.featuredImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [article.featuredImage],
    },
  };
}

export default async function ArticlePage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(slug, 3);
  const articleUrl = `https://advicehub.vercel.app/blog/${slug}`;

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: article.featuredImage,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Person",
      name: article.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "AdviceHub",
      logo: {
        "@type": "ImageObject",
        url: "/favicon.ico",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    wordCount: article.content.split(/\s+/).length,
    articleSection: article.category,
    keywords: article.tags.join(", "),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Breadcrumb */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
            <li>/</li>
            <li className="text-foreground font-medium truncate max-w-[200px]">
              {article.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-10">
          {/* Main Content */}
          <div>
            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Link
                  href={`/blog?category=${article.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full hover:bg-primary/20 transition-colors"
                >
                  {article.category}
                </Link>
                <span className="text-sm text-muted-foreground flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {article.readingTime} min read
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground leading-tight mb-6">
                {article.title}
              </h1>

              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {article.excerpt}
              </p>

              {/* Author & Date */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-lg">
                    {article.author.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      {article.author.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Published on{" "}
                      <time dateTime={article.publishedAt}>
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </time>
                      {article.updatedAt !== article.publishedAt && (
                        <>
                          {" · Updated "}
                          <time dateTime={article.updatedAt}>
                            {new Date(article.updatedAt).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </>
                      )}
                    </p>
                  </div>
                </div>
                <ShareButtons url={articleUrl} title={article.title} />
              </div>
            </header>

            {/* Ad - Top */}
            <AdPlaceholder slot="top" className="mb-8" />

            {/* Featured Image Placeholder */}
            <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary-dark/20 h-64 md:h-80 flex items-center justify-center mb-10">
              <span className="text-8xl opacity-40">
                {article.category === "Technology"
                  ? "💻"
                  : article.category === "Web Development"
                  ? "🌐"
                  : article.category === "Productivity"
                  ? "⚡"
                  : "📈"}
              </span>
            </div>

            {/* Table of Contents (Mobile) */}
            <div className="lg:hidden mb-8">
              <TableOfContents content={article.content} />
            </div>

            {/* Article Content */}
            <div className="article-content">
              {renderMarkdown(article.content)}
            </div>

            {/* Ad - Middle */}
            <AdPlaceholder slot="middle" className="my-8" />

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-border">
              <span className="text-sm font-medium text-muted-foreground">Tags:</span>
              {article.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog?search=${encodeURIComponent(tag)}`}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200 border border-border"
                >
                  {tag}
                </Link>
              ))}
            </div>

            {/* Share Buttons Bottom */}
            <div className="mt-6 pt-6 border-t border-border">
              <ShareButtons url={articleUrl} title={article.title} />
            </div>

            {/* Author Bio */}
            <div className="mt-10 p-6 md:p-8 rounded-2xl bg-muted/50 border border-border">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-dark flex-shrink-0 flex items-center justify-center text-white font-bold text-2xl">
                  {article.author.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-1">
                    {article.author.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.author.bio}
                  </p>
                </div>
              </div>
            </div>

            {/* Ad - Bottom */}
            <AdPlaceholder slot="bottom" className="mt-8" />
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block space-y-8">
            <div className="sticky top-28">
              {/* Table of Contents */}
              <TableOfContents content={article.content} />

              {/* Sidebar Ad */}
              <AdPlaceholder slot="sidebar" className="mt-8" />
            </div>
          </aside>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="mt-16 pt-12 border-t border-border">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
