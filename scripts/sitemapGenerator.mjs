import fs from "fs";
import path from "path";
import url from "url";
import { SitemapStream, streamToPromise } from "sitemap";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// List of routes for sitemap
const routes = [
  "/",
  // Additional routes can be added here...
];

async function generateSitemap() {
  const links = routes.map((page) => ({ url: page }));
  const stream = new SitemapStream({ hostname: "https://joshshearer.co" });

  links.forEach((link) => stream.write(link));

  stream.end();

  const sitemap = await streamToPromise(stream).then((sm) => sm.toString());

  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap().catch(console.error);