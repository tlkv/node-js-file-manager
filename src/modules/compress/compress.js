import * as path from 'path';
import { createBrotliCompress } from 'node:zlib';
import { pipeline } from 'node:stream/promises';
import { createReadStream, createWriteStream } from 'node:fs';

export const compress = async inputStr => {
  try {
    const paths = inputStr.slice(9).split(' ');
    if (paths[0].length === 0 || paths[1].length === 0) {
      throw new Error('Operation failed');
    }
    const filePath = path.join(process.env.WORK_DIRECTORY, paths[0]);
    const filePathFixed = path.normalize(filePath);

    const destPath = path.join(process.env.WORK_DIRECTORY, paths[1]);
    const destPathFixed = path.normalize(destPath);

    const writeStream = createWriteStream(destPathFixed, { flags: 'wx' });
    const readStream = createReadStream(filePathFixed);
    const brotli = createBrotliCompress();

    await pipeline(readStream, brotli, writeStream);
  } catch (err) {
    console.error(new Error('Operation failed'));
  }
};
