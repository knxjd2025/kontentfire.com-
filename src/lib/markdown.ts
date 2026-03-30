/**
 * Simple markdown-to-HTML converter for book content rendering.
 * Handles the subset of markdown used in the AI Apprentice manuscript.
 * No external dependencies required.
 */

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function processInlineMarkdown(text: string): string {
  let result = text;

  // Bold + italic: ***text*** or ___text___
  result = result.replace(/\*\*\*(.+?)\*\*\*/g, '<strong><em>$1</em></strong>');

  // Bold: **text**
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

  // Italic: *text* or _text_ (but not mid-word underscores)
  result = result.replace(/\*([^*]+?)\*/g, '<em>$1</em>');
  result = result.replace(/(?<!\w)_([^_]+?)_(?!\w)/g, '<em>$1</em>');

  // Inline code: `text`
  result = result.replace(/`([^`]+?)`/g, '<code class="bg-slate-100 dark:bg-slate-800 px-1.5 py-0.5 rounded text-sm font-mono text-orange-600 dark:text-orange-400">$1</code>');

  // Images: ![alt](../images/file.png) → <img src="/book-images/file.png" />
  result = result.replace(
    /!\[([^\]]*)\]\(\.\.\/images\/([^)]+)\)/g,
    '<img src="/book-images/$2" alt="$1" class="rounded-lg shadow-md my-6 max-w-full" loading="lazy" />'
  );

  // Links: [text](url)
  result = result.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2" class="text-orange-600 dark:text-orange-400 underline hover:text-orange-700 dark:hover:text-orange-300 transition-colors" target="_blank" rel="noopener noreferrer">$1</a>'
  );

  // Em dashes: --- (three hyphens that aren't horizontal rules)
  result = result.replace(/---/g, '&mdash;');
  result = result.replace(/--/g, '&ndash;');

  return result;
}

function processTable(lines: string[]): string {
  if (lines.length < 2) return '';

  const headerCells = lines[0]
    .split('|')
    .map((c) => c.trim())
    .filter(Boolean);

  const bodyRows = lines.slice(2); // skip separator row

  let html =
    '<div class="overflow-x-auto my-6"><table class="w-full text-sm border-collapse">';
  html += '<thead><tr>';
  for (const cell of headerCells) {
    html += `<th class="text-left p-3 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-900 dark:text-white">${processInlineMarkdown(cell)}</th>`;
  }
  html += '</tr></thead><tbody>';

  for (const row of bodyRows) {
    const cells = row
      .split('|')
      .map((c) => c.trim())
      .filter(Boolean);
    if (cells.length === 0) continue;
    html += '<tr>';
    for (const cell of cells) {
      html += `<td class="p-3 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300">${processInlineMarkdown(cell)}</td>`;
    }
    html += '</tr>';
  }

  html += '</tbody></table></div>';
  return html;
}

export function markdownToHtml(markdown: string): string {
  const lines = markdown.split('\n');
  const htmlParts: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    // Skip empty lines
    if (trimmed === '') {
      i++;
      continue;
    }

    // Horizontal rules
    if (/^---+$/.test(trimmed) || /^\*\*\*+$/.test(trimmed)) {
      htmlParts.push('<hr class="my-8 border-slate-200 dark:border-slate-700" />');
      i++;
      continue;
    }

    // Headings
    const headingMatch = trimmed.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      const text = processInlineMarkdown(headingMatch[2]);
      const id = headingMatch[2]
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');

      const headingClasses: Record<number, string> = {
        1: 'text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-12 mb-6',
        2: 'text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-5',
        3: 'text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-100 mt-8 mb-4',
        4: 'text-lg font-semibold text-slate-800 dark:text-slate-200 mt-6 mb-3',
        5: 'text-base font-semibold text-slate-700 dark:text-slate-300 mt-4 mb-2',
        6: 'text-sm font-semibold text-slate-700 dark:text-slate-300 mt-4 mb-2',
      };

      htmlParts.push(
        `<h${level} id="${id}" class="${headingClasses[level] || ''}">${text}</h${level}>`
      );
      i++;
      continue;
    }

    // Tables: detect by pipe character at the start
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      htmlParts.push(processTable(tableLines));
      continue;
    }

    // Standalone images: ![alt](../images/file.png)
    const imageMatch = trimmed.match(/^!\[([^\]]*)\]\(\.\.\/images\/([^)]+)\)$/);
    if (imageMatch) {
      const alt = imageMatch[1];
      const filename = imageMatch[2];
      htmlParts.push(
        `<figure class="my-8"><img src="/book-images/${filename}" alt="${escapeHtml(alt)}" class="rounded-lg shadow-md max-w-full mx-auto" loading="lazy" />${alt ? `<figcaption class="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">${escapeHtml(alt)}</figcaption>` : ''}</figure>`
      );
      i++;
      continue;
    }

    // Blockquotes
    if (trimmed.startsWith('>')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith('>')) {
        quoteLines.push(lines[i].trim().replace(/^>\s?/, ''));
        i++;
      }
      const quoteContent = quoteLines.map(processInlineMarkdown).join('<br/>');
      htmlParts.push(
        `<blockquote class="border-l-4 border-orange-400 bg-orange-50 dark:bg-orange-950/30 dark:border-orange-600 p-4 my-6 rounded-r-lg text-slate-700 dark:text-slate-300 italic">${quoteContent}</blockquote>`
      );
      continue;
    }

    // Unordered lists
    if (/^[-*+]\s/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^[-*+]\s/.test(lines[i].trim())) {
        listItems.push(
          processInlineMarkdown(lines[i].trim().replace(/^[-*+]\s/, ''))
        );
        i++;
      }
      htmlParts.push(
        `<ul class="list-disc pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">${listItems.map((item) => `<li>${item}</li>`).join('')}</ul>`
      );
      continue;
    }

    // Ordered lists
    if (/^\d+\.\s/.test(trimmed)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
        listItems.push(
          processInlineMarkdown(lines[i].trim().replace(/^\d+\.\s/, ''))
        );
        i++;
      }
      htmlParts.push(
        `<ol class="list-decimal pl-6 my-4 space-y-2 text-slate-700 dark:text-slate-300">${listItems.map((item) => `<li>${item}</li>`).join('')}</ol>`
      );
      continue;
    }

    // Paragraphs — collect consecutive non-empty lines
    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() !== '' &&
      !lines[i].trim().startsWith('#') &&
      !lines[i].trim().startsWith('|') &&
      !lines[i].trim().startsWith('>') &&
      !/^[-*+]\s/.test(lines[i].trim()) &&
      !/^\d+\.\s/.test(lines[i].trim()) &&
      !/^---+$/.test(lines[i].trim()) &&
      !/^\*\*\*+$/.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }

    if (paraLines.length > 0) {
      const text = processInlineMarkdown(paraLines.join(' '));
      htmlParts.push(
        `<p class="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">${text}</p>`
      );
    }
  }

  return htmlParts.join('\n');
}
