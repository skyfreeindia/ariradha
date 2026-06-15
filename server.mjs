import { createReadStream, existsSync } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const PORT = Number(process.env.PORT || 8080);
const DIST_DIR = join(process.cwd(), "dist");
const INDEX_PATH = join(DIST_DIR, "index.html");

if (!existsSync(INDEX_PATH)) {
  console.error("dist/index.html not found. Run npm run build before starting.");
  process.exit(1);
}

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
};

function sendFile(res, filePath) {
  const ext = extname(filePath).toLowerCase();
  const mime = MIME_TYPES[ext] || "application/octet-stream";
  res.writeHead(200, { "Content-Type": mime });
  createReadStream(filePath).pipe(res);
}

const server = createServer(async (req, res) => {
  try {
    const urlPath = (req.url || "/").split("?")[0];
    const normalized = normalize(urlPath).replace(/^([.][.][/\\])+/, "");
    const requested = normalized === "/" ? "/index.html" : normalized;
    const filePath = join(DIST_DIR, requested);

    if (filePath.startsWith(DIST_DIR)) {
      try {
        const fileStat = await stat(filePath);
        if (fileStat.isFile()) {
          sendFile(res, filePath);
          return;
        }
      } catch {
        // Fall through to SPA fallback.
      }
    }

    sendFile(res, INDEX_PATH);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("Internal Server Error");
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Serving dist on http://0.0.0.0:${PORT}`);
});
