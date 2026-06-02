import { MetadataRoute } from "next";

const BASE = "https://vinu-joy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date() },
    { url: `${BASE}/case-studies/retail-web-application`,   lastModified: new Date() },
    { url: `${BASE}/case-studies/import-cargo-release`,     lastModified: new Date() },
    { url: `${BASE}/case-studies/storage-cost-management`,  lastModified: new Date() },
    { url: `${BASE}/case-studies/tonico-smiles`,            lastModified: new Date() },
  ];
}
