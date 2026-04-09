import React from "react";

/**
 * Simple markdown-to-JSX renderer for article content.
 * Handles headings, paragraphs, code blocks, lists, bold, inline code, links, blockquotes, and tables.
 */
export function renderMarkdown(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;
  let key = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Code block
    if (line.startsWith("```")) {
      const lang = line.slice(3).trim();
      const codeLines: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```
      elements.push(
        <pre key={key++} className="not-prose">
          <code className={lang ? `language-${lang}` : ""}>
            {codeLines.join("\n")}
          </code>
        </pre>
      );
      continue;
    }

    // Table
    if (line.includes("|") && line.trim().startsWith("|")) {
      const tableRows: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) {
        tableRows.push(lines[i]);
        i++;
      }
      if (tableRows.length >= 2) {
        const headerCells = tableRows[0]
          .split("|")
          .filter((c) => c.trim())
          .map((c) => c.trim());
        const bodyRows = tableRows.slice(2); // skip separator row
        elements.push(
          <table key={key++}>
            <thead>
              <tr>
                {headerCells.map((cell, ci) => (
                  <th key={ci}>{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {bodyRows.map((row, ri) => {
                const cells = row
                  .split("|")
                  .filter((c) => c.trim())
                  .map((c) => c.trim());
                return (
                  <tr key={ri}>
                    {cells.map((cell, ci) => (
                      <td key={ci}>{renderInline(cell)}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        );
        continue;
      }
    }

    // Heading
    const headingMatch = line.match(/^(#{1,6})\s+(.+)/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = headingMatch[2];
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
      const Tag = `h${level}` as keyof React.JSX.IntrinsicElements;
      elements.push(
        <Tag key={key++} id={id}>
          {renderInline(text)}
        </Tag>
      );
      i++;
      continue;
    }

    // Blockquote
    if (line.startsWith("> ")) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("> ")) {
        quoteLines.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <blockquote key={key++}>
          <p>{renderInline(quoteLines.join(" "))}</p>
        </blockquote>
      );
      continue;
    }

    // Unordered list
    if (line.match(/^[-*]\s+/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*]\s+/)) {
        listItems.push(lines[i].replace(/^[-*]\s+/, ""));
        i++;
      }
      elements.push(
        <ul key={key++}>
          {listItems.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ul>
      );
      continue;
    }

    // Ordered list
    if (line.match(/^\d+\.\s+/)) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].match(/^\d+\.\s+/)) {
        listItems.push(lines[i].replace(/^\d+\.\s+/, ""));
        i++;
      }
      elements.push(
        <ol key={key++}>
          {listItems.map((item, li) => (
            <li key={li}>{renderInline(item)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Empty line
    if (line.trim() === "") {
      i++;
      continue;
    }

    // Paragraph
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== "" &&
      !lines[i].startsWith("#") &&
      !lines[i].startsWith("```") &&
      !lines[i].startsWith("> ") &&
      !lines[i].match(/^[-*]\s+/) &&
      !lines[i].match(/^\d+\.\s+/) &&
      !(lines[i].includes("|") && lines[i].trim().startsWith("|"))
    ) {
      paraLines.push(lines[i]);
      i++;
    }
    if (paraLines.length > 0) {
      elements.push(
        <p key={key++}>{renderInline(paraLines.join(" "))}</p>
      );
    }
  }

  return elements;
}

function renderInline(text: string): React.ReactNode {
  // Split on inline patterns: **bold**, `code`, [link](url)
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let inlineKey = 0;

  while (remaining.length > 0) {
    // Bold
    const boldMatch = remaining.match(/\*\*(.+?)\*\*/);
    // Inline code
    const codeMatch = remaining.match(/`([^`]+)`/);
    // Link
    const linkMatch = remaining.match(/\[([^\]]+)\]\(([^)]+)\)/);

    // Find the earliest match
    const matches = [
      boldMatch ? { type: "bold", index: boldMatch.index!, match: boldMatch } : null,
      codeMatch ? { type: "code", index: codeMatch.index!, match: codeMatch } : null,
      linkMatch ? { type: "link", index: linkMatch.index!, match: linkMatch } : null,
    ]
      .filter(Boolean)
      .sort((a, b) => a!.index - b!.index);

    if (matches.length === 0) {
      parts.push(remaining);
      break;
    }

    const first = matches[0]!;

    // Text before the match
    if (first.index > 0) {
      parts.push(remaining.slice(0, first.index));
    }

    if (first.type === "bold") {
      parts.push(<strong key={inlineKey++}>{first.match[1]}</strong>);
      remaining = remaining.slice(first.index + first.match[0].length);
    } else if (first.type === "code") {
      parts.push(<code key={inlineKey++}>{first.match[1]}</code>);
      remaining = remaining.slice(first.index + first.match[0].length);
    } else if (first.type === "link") {
      parts.push(
        <a key={inlineKey++} href={first.match[2]}>
          {first.match[1]}
        </a>
      );
      remaining = remaining.slice(first.index + first.match[0].length);
    }
  }

  return parts.length === 1 ? parts[0] : parts;
}
