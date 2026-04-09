import type { Metadata } from "next";
import Link from "next/link";
import { categories } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Categories — Browse Topics",
  description:
    "Explore all article categories on AdviceHub. Find content on technology, web development, productivity, and online business.",
  openGraph: {
    title: "Categories — Browse Topics | AdviceHub",
    description: "Explore all article categories on AdviceHub.",
  },
};

export default function CategoriesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4">
          Categories
        </h1>
        <p className="text-lg text-muted-foreground">
          Browse articles by topic to find exactly what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={`/blog?category=${cat.slug}`}
            className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-5xl mb-4 block">{cat.icon}</span>
            <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
              {cat.name}
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {cat.description}
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
              {cat.count} articles
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
