import { createContext, useContext } from 'react';

export const LocaleContext = createContext('ko');

export function useLocale() {
  return useContext(LocaleContext);
}

// Builds a locale-aware path. Korean is the default locale at the root;
// English pages live under /en.
export function localePath(locale, path) {
  if (locale === 'en') return path === '/' ? '/en' : `/en${path}`;
  return path;
}
