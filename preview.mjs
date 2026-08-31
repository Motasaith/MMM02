import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const ROOT = new URL("./out/", import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1");
const PORT = 4321;
const TYPES = { ".html":"text/html", ".js":"text/javascript", ".css":"text/css", ".json":"application/json",
  ".png":"image/png", ".jpg":"image/jpeg", ".jpeg":"image/jpeg", ".webp":"image/webp", ".svg":"image/svg+xml",
  ".woff":"font/woff", ".woff2":"font/woff2", ".ico":"image/x-icon", ".txt":"text/plain" };

const send = (res, code, body, type) => { res.writeHead(code, { "content-type": type }); res.end(body); };

createServer(async (req, res) => {
  let p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const candidates = [p, p.replace(/\/$/, "") + "/index.html", p + ".html", p + "/index.html"];
  for (const c of candidates) {
    const full = join(ROOT, normalize(c));
    try {
      const s = await stat(full);
      if (s.isFile()) return send(res, 200, await readFile(full), TYPES[extname(full)] ?? "application/octet-stream");
    } catch {}
  }
  try { return send(res, 404, await readFile(join(ROOT, "404.html")), "text/html"); }
  catch { return send(res, 404, "not found", "text/plain"); }
}).listen(PORT, () => console.log("ready on " + PORT));
