import { MetadataRoute } from 'next';
import { districts } from '@/data/districts';
import { tireGuides } from '@/data/tire-guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mobillastikci.com'; // Change to actual domain

  const routes = [
    '',
    '/istanbul',
    '/lastik-rehberi',
    '/iletisim',
    '/hizmetler',
    '/hakkimizda',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // District pages
  const districtRoutes = districts.map((district) => ({
    url: `${baseUrl}/istanbul/${district.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Tire guide pages
  const guideRoutes = tireGuides.map((guide) => ({
    url: `${baseUrl}/lastik-rehberi/${guide.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...districtRoutes, ...guideRoutes];
}
