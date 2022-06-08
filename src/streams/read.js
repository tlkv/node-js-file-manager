import * as path from 'path';
import { createReadStream } from 'fs';
import { dirAndFileNames } from '../_utils/utils.js';

export const read = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files', 'fileToRead.txt');
  const readStream = createReadStream(sourcePath);

  readStream.on('data', chunk => {
    process.stdout.write(chunk);
  });

  readStream.on('error', err => {
    console.error(err);
    process.exit();
  });

  readStream.on('end', () => {
    process.stdout.write('\n');
  });
};

read();
