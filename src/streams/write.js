import * as path from 'path';
import { createWriteStream } from 'fs';
import { dirAndFileNames } from '../_utils/utils.js';

export const write = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const destPath = path.join(__dirname, 'files', 'fileToWrite.txt');
  const writeStream = createWriteStream(destPath);
  console.log('Write your data (CTRL + C to exit): ');

  process.stdin.on('data', chunk => {
    writeStream.write(chunk);
  });

  process.stdin.on('end', () => {
    writeStream.end();
  });
};

write();
