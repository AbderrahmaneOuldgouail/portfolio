import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: process.env.SITE_URL!,
      lastModified: new Date(),
      changeFrequency: "monthly",
      alternates: {
        languages: {
          en: process.env.SITE_URL + "/en",
          fr: process.env.SITE_URL + "/fr",
          ar: process.env.SITE_URL + "/ar",
        },
      },
    },
  ];
}
