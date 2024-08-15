import * as fs from 'fs';

export const toDataUri = (type, path) => {
  const svg_file = fs.readFileSync(`styles/${path}`);
  const encoded = btoa(svg_file);
  return `data:image/${type};base64,${encoded}`;
}
