import Link from "next/link";
import type { Article } from "@/lib/articles";

interface ArticleCardProps {
  article: Article;
  featured?: boolean;
}

export default function ArticleCard({ article, featured = false }: ArticleCardProps) {
  return (
    <article
      className={`group bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/20 transition-all duration-300 ${
        featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""
      }`}
    >
      {/* Image */}
      <Link
        href={`/blog/${article.slug}`}
        className={`block overflow-hidden ${featured ? "h-64 md:h-full" : "h-52"} relative bg-muted`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/30 flex items-center justify-center">
          <span className="text-6xl opacity-50">
            {article.category === "Technology"
              ? "💻"
              : article.category === "Web Development"
              ? "🌐"
              : article.category === "Productivity"
              ? "⚡"
              : "📈"}
          </span>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      {/* Content */}
      <div className={`p-6 ${featured ? "flex flex-col justify-center" : ""}`}>
        {/* Category & Reading Time */}
        <div className="flex items-center gap-3 mb-3">
          <Link
            href={`/blog?category=${article.category.toLowerCase().replace(/\s+/g, "-")}`}
            className="text-xs font-semibold uppercase tracking-wider text-primary hover:text-primary-dark transition-colors bg-primary/10 px-3 py-1 rounded-full"
          >
            {article.category}
          </Link>
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {article.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold text-foreground group-hover:text-primary transition-colors duration-200 mb-2 leading-tight ${featured ? "text-2xl" : "text-lg"}`}>
          <Link href={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${featured ? "line-clamp-3" : "line-clamp-2"}`}>
          {article.excerpt}
        </p>

        {/* Author & Date */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white text-xs font-bold">
              {article.author.name.charAt(0)}
            </div>
            <span className="text-sm text-muted-foreground">{article.author.name}</span>
          </div>
          <time
            dateTime={article.publishedAt}
            className="text-xs text-muted-foreground"
          >
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
        </div>
      </div>
    </article>
  );
}
