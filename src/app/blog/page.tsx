import type { Metadata } from "next";
import { Suspense } from "react";
import BlogPageClient from "./BlogPageClient";

export const metadata: Metadata = {
  title: "Blog — All Articles",
  description:
    "Browse all articles on technology, web development, productivity, and online business. Find tutorials, guides, and expert tips.",
  openGraph: {
    title: "Blog — All Articles | AdviceHub",
    description:
      "Browse all articles on technology, web development, productivity, and online business.",
  },
};

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
        <p className="text-muted-foreground">Loading articles...</p>
      </div>
    }>
      <BlogPageClient />
    </Suspense>
  );
}
