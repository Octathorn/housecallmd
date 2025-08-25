export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/', '/admin/'],
      },
    ],
    sitemap: 'https://housecallmd.com/sitemap.xml',
    host: 'https://housecallmd.com',
  };
}
