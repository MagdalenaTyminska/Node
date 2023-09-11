//tablica aktualnych plików z wykorzystaniem import
import { readdir, stat } from "fs/promises";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function listFiles() {
  try {
    const files = await readdir(__dirname);

    const fileInfoPromises = files.map(async (filename) => {
      const filePath = join(__dirname, filename);
      const stats = await stat(filePath);
      return {
        Name: filename,
        Size: stats.size,
        Date: stats.mtime,
      };
    });

    const fileInfo = await Promise.all(fileInfoPromises);
    console.table(fileInfo);
  } catch (error) {
    console.error("Wystąpił błąd:", error);
  }
}

listFiles();
