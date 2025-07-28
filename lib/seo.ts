/**
 * Utility helpers to build SEO meta tags and JSON-LD schema blocks.
 * Keep purely data-driven – copy strings inserted in pages/components.
 */
export interface MetaOptions {
  title: string;
  description: string;
  url: string;
  image?: string;
}

export function buildMeta({ title, description, url, image }: MetaOptions) {
  const tags = [
    { name: 'description', content: description },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:url', content: url },
    { property: 'twitter:card', content: 'summary_large_image' },
  ];

  if (image) {
    tags.push({ property: 'og:image', content: image });
    tags.push({ property: 'twitter:image', content: image });
  }

  return tags;
}

/**
 * Generic generator – extend or overwrite per page need.
 */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sky High Investing',
    url: 'https://skyhighinvesting.com',
    foundingDate: '2007',
    logo: '/brand/logo-512.png',
    sameAs: [
      // TODO: insert social URLs
    ],
  };
} 