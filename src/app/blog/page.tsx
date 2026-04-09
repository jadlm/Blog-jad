import type { Metadata } from "next";
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
  return <BlogPageClient />;
}
