import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEBSITE_ROOT = path.join(__dirname, "..", "website");
const PORT = Number(process.env.PORT) || 3000;

const app = express();

app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

/** Static site (HTML, JS, data JSON) — open http://localhost:3000/ */
app.use(express.static(WEBSITE_ROOT));

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}/ (static → ${WEBSITE_ROOT})`);
});
