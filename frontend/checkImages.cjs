const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const publicDir = path.join(__dirname, 'public');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = path.join(dir, e.name);
    return e.isDirectory() ? walk(p) : [p];
  });
}

function existsExact(relPath) {
  let current = publicDir;
  for (const part of relPath.split('/').filter(Boolean)) {
    const names = fs.existsSync(current) ? fs.readdirSync(current) : [];
    if (!names.includes(part)) return false;
    current = path.join(current, part);
  }
  return true;
}

let problems = 0;
const seen = new Set();

for (const file of walk(srcDir).filter((f) => /\.(jsx?|css)$/.test(f))) {
  const text = fs.readFileSync(file, 'utf8');
  const matches = text.match(/\/images\/[^"'`)\n]+/g) || [];
  for (const m of matches) {
    const key = file + m;
    if (seen.has(key)) continue;
    seen.add(key);
    if (!existsExact(decodeURI(m))) {
      problems++;
      console.log('NOT FOUND (check spelling/capital letters):', m, '\n   used in', path.relative(__dirname, file));
    }
  }
}

console.log(problems ? `\n${problems} problem(s) found.` : 'All /images paths are OK.');