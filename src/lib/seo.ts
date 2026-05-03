export function absoluteUrl(pathname: string) {
  return new URL(pathname, 'https://otevrenainformatika.cz').toString();
}

export function ogImageUrl(opts: { type: 'home' | 'material' | 'app' | 'blog' | 'author'; id?: string }) {
  if (opts.type === 'home') {
    return absoluteUrl('/og/home.svg');
  }
  if (!opts.id) {
    // Collection index pages can share the home image (or a dedicated index image later).
    return absoluteUrl('/og/home.svg');
  }
  return absoluteUrl(`/og/${opts.type}/${encodeURIComponent(opts.id)}.svg`);
}
