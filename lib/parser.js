import fs from 'fs/promises';

export async function parseLogFile(filePath) {
  const content = await fs.readFile(filePath, 'utf-8');
  return content
    .split('\n')
    .filter(line => line.trim())
    .map(line => {
      try {
        return JSON.parse(line); // structured log
      } catch {
        return { raw: line }; // fallback
      }
    });
}
