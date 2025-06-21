
module.exports = {
  siteUrl: "https://mynamakkal.in", // ✅ Replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
