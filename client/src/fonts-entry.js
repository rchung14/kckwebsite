// A CSS-only Rollup entry (see vite.config.js rollupOptions.input) so Vite
// emits the webfont @font-face declarations as their own asset, separate
// from the main stylesheet. This lets the prerender step load it async via
// <link rel="preload" as="style" onload="...rel='stylesheet'">, keeping the
// ~500KB of unicode-range-sliced @font-face rules out of the render-blocking
// critical path. Nothing here executes at runtime — only the extracted CSS
// output is used; this JS chunk itself is never referenced or loaded.
import './styles/fonts.css';
import './styles/fonts-kr.css';
