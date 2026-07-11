import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Update this URL with your custom domain once deployed
  const baseUrl = "https://prakash.ai";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];
}
