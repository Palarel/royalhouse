/**
 * Prepares Inn Royal House walkthroughs for the website.
 * Run: node scripts/process-media.mjs "C:\\Users\\...\\Telegram Desktop"
 *
 * WATERMARK_CROP="0:0:0:0" has the format left:right:top:bottom in pixels.
 * E.g. WATERMARK_CROP="0:0:0:120" crops a 120px bottom strip from each source.
 */
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";
import { spawnSync } from "node:child_process";

const sourceDirectory = process.argv[2];
const outputDirectory = join(process.cwd(), "public", "properties");
const crop = (process.env.WATERMARK_CROP ?? "0:0:0:110").split(":").map(Number);
const [left, right, top, bottom] = crop;

if (!sourceDirectory || !existsSync(sourceDirectory) || crop.length !== 4 || crop.some(Number.isNaN)) {
  console.error("Usage: WATERMARK_CROP=left:right:top:bottom node scripts/process-media.mjs <source-directory>");
  process.exit(1);
}

mkdirSync(outputDirectory, { recursive: true });
const inputFiles = readdirSync(sourceDirectory).filter((name) => /^video_2026-10-06_15-39-22(?: \(\d+\))?\.mp4$/i.test(name));
if (!inputFiles.length) throw new Error("No matching MP4 files found.");

const run = (args) => {
  const result = spawnSync("ffmpeg", ["-y", "-hide_banner", "-loglevel", "error", ...args], { stdio: "inherit" });
  if (result.status !== 0) throw new Error("ffmpeg failed");
};

for (const [index, name] of inputFiles.entries()) {
  const id = `property-${String(index + 1).padStart(2, "0")}`;
  const input = join(sourceDirectory, name);
  // The crop keeps the central picture intact and removes the configured edge band before encoding.
  const filter = `crop=iw-${left + right}:ih-${top + bottom}:${left}:${top},scale='min(1920,iw)':-2:flags=lanczos`;
  run(["-ss", "00:00:01.5", "-i", input, "-frames:v", "1", "-vf", filter, "-q:v", "82", join(outputDirectory, `${id}-cover.webp`)]);
  run(["-i", input, "-vf", filter, "-map", "0:v:0", "-map", "0:a?", "-c:v", "libx264", "-crf", "23", "-preset", "medium", "-movflags", "+faststart", "-c:a", "aac", "-b:a", "128k", join(outputDirectory, `${id}.mp4`)]);
  run(["-i", input, "-vf", filter, "-map", "0:v:0", "-map", "0:a?", "-c:v", "libvpx-vp9", "-crf", "34", "-b:v", "0", "-row-mt", "1", "-c:a", "libopus", "-b:a", "96k", join(outputDirectory, `${id}.webm`)]);
  console.log(`Processed ${basename(input)} -> ${id}`);
}
