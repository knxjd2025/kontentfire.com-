import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  const { path: segments } = await params;
  const filename = segments.join('/');

  // Sanitize: only allow image files
  if (!/^[\w\-]+\.(png|jpg|jpeg|webp)$/i.test(filename)) {
    return new NextResponse('Not found', { status: 404 });
  }

  const filePath = path.join(process.cwd(), 'book', 'images', filename);

  // If file exists locally, serve it
  if (fs.existsSync(filePath)) {
    const buffer = fs.readFileSync(filePath);
    const ext = path.extname(filename).toLowerCase();
    const contentType =
      ext === '.png' ? 'image/png'
      : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg'
      : ext === '.webp' ? 'image/webp'
      : 'application/octet-stream';

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  }

  // On Vercel, book/images/ is excluded. Return a simple placeholder SVG.
  const alt = filename.replace(/\.\w+$/, '').replace(/[-_]/g, ' ');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
    <rect width="800" height="500" fill="#1e293b" rx="12"/>
    <text x="400" y="230" text-anchor="middle" fill="#94a3b8" font-family="system-ui" font-size="18" font-weight="600">📖 Illustration</text>
    <text x="400" y="270" text-anchor="middle" fill="#64748b" font-family="system-ui" font-size="14">${alt.substring(0, 60)}</text>
  </svg>`;

  return new NextResponse(svg, {
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
