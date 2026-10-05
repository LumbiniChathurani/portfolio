export const about =
  "I started my academic journey in the biology stream before transitioning into IT through an HNDIT at SLIATE. Today, I work at FECT, contributing to projects involving weather monitoring, real-time air quality systems, GIS mapping, and automated data pipelines for Sri Lanka.";

export const projects = [
  {
    title: "cleanair.lk Air Quality Map",
    description:
      "A live, multi-source map of Sri Lanka's air quality, combining IQAir, PurpleAir and WAQI data with EPA-compliant AQI conversion, division overlays and AQI history charts.",
    tags: ["Leaflet", "Python", "JavaScript", "GitHub Actions"],
    link: "https://cleanair.lk",
    linkLabel: "View live site",
  },
  {
    title: "cleanair.lk AQ Analytics Dashboard",
    description:
      "A Next.js and TypeScript dashboard with period switching, custom date ranges, per-station toggles, CSV export and line, bar, pie and heatmap charts.",
    tags: ["Next.js", "TypeScript", "Supabase", "Charts"],
    link: "https://cleanair.lk",
    linkLabel: "View live site",
  },
  {
    title: "Rainfall and Temperature Map Automation",
    description:
      "Automated rainfall and Temperature map generation in R for Sri Lanka, using interpolation, kriging with elevation data and province boundaries.",
    tags: ["R", "CDT", "GIS", "Kriging"],
  },
  {
    title: "Multi-Source Data Scrapers",
    description:
      "Scrapers and pipelines that collect air quality and reservoir data from several sources while staying within free API limits, cutting PurpleAir API usage by about 79%.",
    tags: ["Python", "Playwright", "APIs", "Automation", "Browserql", "Selenium"],
  },
];

export const skills = [
  { group: "GIS & Data", items: ["R", "CDT", "Kriging", "Leaflet", "Excel"] },
  { group: "Backend & APIs", items: ["Node.js", "Express", "Python", "PostgreSQL", "Postman"] },
  { group: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Three.js"] },
  { group: "Data Engineering", items: ["Web scraping", "Playwright", "GitHub Actions", "Supabase"] },
];

export const contact = {
  email: "your-email@example.com",
  github: "https://github.com/YOUR-USERNAME",
  linkedin: "https://www.linkedin.com/in/YOUR-PROFILE",
};