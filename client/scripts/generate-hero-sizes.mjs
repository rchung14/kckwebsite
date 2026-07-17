// One-off: renders the placeholder hero brand pattern (same generator as
// generate-assets.mjs) at multiple widths directly from SVG, so the <picture>
// srcset in Home.jsx can serve a size appropriate to the viewport instead of
// shipping the same full-size file to phones and desktop alike. Because the
// source is vector, rendering each width straight from SVG is lossless —
// no upscaling artifacts the way resizing an already-rasterized file would have.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

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

const outDir = path.resolve('public/images');
const widths = [800, 1400, 2000];
const aspect = 1300 / 1040; // matches attorney-portrait-hero.webp's existing 4:5 ratio

for (const w of widths) {
  const h = Math.round(w * aspect);
  const svg = Buffer.from(brandSvg(w, h));
  const avifFile = path.join(outDir, `attorney-portrait-hero-${w}.avif`);
  const webpFile = path.join(outDir, `attorney-portrait-hero-${w}.webp`);
  await sharp(svg).avif({ quality: 60 }).toFile(avifFile);
  await sharp(svg).webp({ quality: 78 }).toFile(webpFile);
  console.log(
    `✓ ${w}w (${h}h): ${(fs.statSync(avifFile).size / 1024).toFixed(1)} KB avif, ${(fs.statSync(webpFile).size / 1024).toFixed(1)} KB webp`
  );
}
