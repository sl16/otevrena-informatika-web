import { spawn } from 'node:child_process';
import { mkdir, readdir, rm, stat, copyFile } from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();

const srcRoot = path.join(repoRoot, 'src', 'content', 'presentations');
const themeFile = path.join(repoRoot, 'src', 'content', 'presentations', 'themes', 'oi.css');
const outRoot = path.join(repoRoot, 'public', 'prezentace');

const existsDir = async (p) => {
  try {
    return (await stat(p)).isDirectory();
  } catch {
    return false;
  }
};

const existsFile = async (p) => {
  try {
    return (await stat(p)).isFile();
  } catch {
    return false;
  }
};

const walk = async (dir) => {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) files.push(...(await walk(full)));
    else if (ent.isFile()) files.push(full);
  }
  return files;
};

const copyDir = async (fromDir, toDir) => {
  if (!(await existsDir(fromDir))) return;
  await mkdir(toDir, { recursive: true });
  const entries = await readdir(fromDir, { withFileTypes: true });
  for (const ent of entries) {
    const from = path.join(fromDir, ent.name);
    const to = path.join(toDir, ent.name);
    if (ent.isDirectory()) {
      await copyDir(from, to);
    } else if (ent.isFile()) {
      await mkdir(path.dirname(to), { recursive: true });
      await copyFile(from, to);
    }
  }
};

const run = (cmd, args, { cwd } = {}) =>
  new Promise((resolve, reject) => {
    const child = spawn(cmd, args, {
      cwd,
      stdio: 'inherit',
      shell: false,
    });
    child.on('exit', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`${cmd} exited with code ${code}`));
    });
    child.on('error', reject);
  });

// Build HTML for each deck at src/content/presentations/<id>/deck.md
async function main() {
  if (!(await existsDir(srcRoot))) {
    // No presentations yet.
    return;
  }

  const marpCli = path.join(repoRoot, 'node_modules', '@marp-team', 'marp-cli', 'marp-cli.js');
  if (!(await existsFile(marpCli))) {
    // Don't fail the whole site build if dependencies are not installed yet.
    console.warn('[presentations] marp-cli is not installed. Skipping deck generation.');
    console.warn('[presentations] Install dependencies and re-run build to generate /public/prezentace/*');
    return;
  }

  const allFiles = await walk(srcRoot);
  const decks = allFiles.filter((f) => f.endsWith(`${path.sep}deck.md`));
  if (decks.length === 0) return;

  await mkdir(outRoot, { recursive: true });

  for (const deckPath of decks) {
    const rel = path.relative(srcRoot, deckPath);
    const deckId = rel.split(path.sep)[0];
    if (!deckId || deckId === 'themes') continue;

    const deckDir = path.join(srcRoot, deckId);
    const outDir = path.join(outRoot, deckId);
    const outFile = path.join(outDir, 'index.html');

    // Replace generated output to avoid stale assets.
    await rm(outDir, { recursive: true, force: true });
    await mkdir(outDir, { recursive: true });

    await run(process.execPath, [
      marpCli,
      deckPath,
      '--html',
      '--theme',
      themeFile,
      '--allow-local-files',
      '--output',
      outFile,
    ]);

    // Copy all supporting files (non-markdown) from deck directory to output.
    const copySupportFiles = async (fromDir, toDir) => {
      if (!(await existsDir(fromDir))) return;
      const entries = await readdir(fromDir, { withFileTypes: true });
      for (const ent of entries) {
        if (ent.name === 'deck.md') continue;
        const from = path.join(fromDir, ent.name);
        const to = path.join(toDir, ent.name);
        if (ent.isDirectory()) {
          await copyDir(from, to);
        } else if (ent.isFile()) {
          await mkdir(path.dirname(to), { recursive: true });
          await copyFile(from, to);
        }
      }
    };
    await copySupportFiles(deckDir, outDir);
  }
}

await main();
