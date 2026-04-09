"use client";

import { useMemo } from "react";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ content }: { content: string }) {
  const headings = useMemo(() => {
    const items: TOCItem[] = [];
    const lines = content.split("\n");
    for (const line of lines) {
      const match = line.match(/^(#{2,3})\s+(.+)/);
      if (match) {
        const level = match[1].length;
        const text = match[2].trim();
        const id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, "-")
          .replace(/^-|-$/g, "");
        items.push({ id, text, level });
      }
    }
    return items;
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav
      className="p-5 rounded-2xl bg-muted/50 border border-border"
      aria-label="Table of contents"
    >
      <h2 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">
        Table of Contents
      </h2>
      <ul className="space-y-1.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className={`block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 ${
                heading.level === 3 ? "pl-4" : ""
              }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
