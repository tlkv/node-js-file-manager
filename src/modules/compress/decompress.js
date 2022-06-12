import * as path from 'path';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';
import { createBrotliDecompress } from 'node:zlib';

export const decompress = async inputStr => {
  try {
    const paths = inputStr.slice(11).split(' ');
    if (paths[0].length === 0 || paths[1].length === 0) {
      throw new Error('Operation failed');
    }
    const filePath = path.join(process.env.WORK_DIRECTORY, paths[0]);
    const filePathFixed = path.normalize(filePath);

    const destPath = path.join(process.env.WORK_DIRECTORY, paths[1]);
    const destPathFixed = path.normalize(destPath);

    const writeStream = createWriteStream(destPathFixed, { flags: 'wx' });
    const readStream = createReadStream(filePathFixed);
    const brotli = createBrotliDecompress();

    await pipeline(readStream, brotli, writeStream);
  } catch (err) {
    console.error(new Error('Operation failed'));
  }
};
