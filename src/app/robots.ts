import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Update this URL with your custom domain once deployed
  const baseUrl = "https://prakash.ai";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
