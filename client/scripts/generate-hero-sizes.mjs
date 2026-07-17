// Generates the responsive hero srcset (800/1400/2000w, AVIF + WebP) from the
// real source photo in assets-src/. The source file itself is not shipped —
// only these resized/re-encoded variants land in public/images/, which is
// what Vite copies into dist/. Re-run with `npm run hero-sizes` if the
// source photo changes.

import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const sourcePath = path.resolve('assets-src/attorney-portrait-hero-source.jpg');
const outDir = path.resolve('public/images');
fs.mkdirSync(outDir, { recursive: true });

if (!fs.existsSync(sourcePath)) {
  throw new Error(`Missing source photo: ${path.relative(process.cwd(), sourcePath)}`);
}

const widths = [800, 1400, 2000];

for (const w of widths) {
  const avifFile = path.join(outDir, `attorney-portrait-hero-${w}.avif`);
  const webpFile = path.join(outDir, `attorney-portrait-hero-${w}.webp`);
  await sharp(sourcePath).resize({ width: w }).avif({ quality: 60 }).toFile(avifFile);
  await sharp(sourcePath).resize({ width: w }).webp({ quality: 78 }).toFile(webpFile);
  const avifMeta = await sharp(avifFile).metadata();
  console.log(
    `✓ ${w}w (${avifMeta.width}x${avifMeta.height}): ${(fs.statSync(avifFile).size / 1024).toFixed(1)} KB avif, ${(fs.statSync(webpFile).size / 1024).toFixed(1)} KB webp`
  );
}
