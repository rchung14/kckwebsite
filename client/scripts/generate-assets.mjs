// Generates the placeholder attorney headshot (AVIF + WebP) with the site's
// geometric brand motif. Replace with a real photo using the same filenames
// — no code changes needed:
//   public/images/attorney-headshot-about.avif / .webp  ( 900×1200)
// The hero placeholder is generated separately by generate-hero-sizes.mjs,
// which renders the responsive 800/1400/2000w srcset variants directly.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const outDir = path.resolve('public/images');
fs.mkdirSync(outDir, { recursive: true });

function brandSvg(w, h) {
  const cx = w / 2;
  const cy = h / 2;
  const diamond = (size, opacity, fill = 'none') =>
    `<rect x="${cx - size / 2}" y="${cy - size / 2}" width="${size}" height="${size}"
       transform="rotate(45 ${cx} ${cy})" fill="${fill}"
       stroke="${fill === 'none' ? '#C9A84C' : 'none'}" stroke-width="1.5" opacity="${opacity}"/>`;
  const stripes = [];
  for (let i = -h; i < w + h; i += 42) {
    stripes.push(
      `<line x1="${i}" y1="0" x2="${i + h}" y2="${h}" stroke="white" stroke-width="1" opacity="0.05"/>`
    );
  }
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
    <rect width="${w}" height="${h}" fill="#1A1A2E"/>
    ${stripes.join('\n')}
    ${diamond(w * 0.62, 0.3)}
    ${diamond(w * 0.4, 0.5)}
    ${diamond(w * 0.16, 0.4, '#C9A84C')}
  </svg>`;
}

async function generate(name, w, h) {
  const svg = Buffer.from(brandSvg(w, h));
  await sharp(svg).avif({ quality: 55 }).toFile(path.join(outDir, `${name}.avif`));
  await sharp(svg).webp({ quality: 80 }).toFile(path.join(outDir, `${name}.webp`));
  for (const ext of ['avif', 'webp']) {
    const size = fs.statSync(path.join(outDir, `${name}.${ext}`)).size;
    console.log(`✓ ${name}.${ext} ${w}×${h} (${(size / 1024).toFixed(1)} KB)`);
  }
}

await generate('attorney-headshot-about', 900, 1200);
