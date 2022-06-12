import * as path from 'path';
import { createReadStream, createWriteStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';

export const cp = async inputStr => {
  try {
    const paths = inputStr.slice(3).split(' ');
    if (paths[0].length === 0 || paths[1].length === 0) {
      throw new Error('Operation failed');
    }

    const filePath = path.join(process.env.WORK_DIRECTORY, paths[0]);
    const filePathFixed = path.normalize(filePath);

    const destPath = path.join(process.env.WORK_DIRECTORY, paths[1]);
    const destPathFixed = path.normalize(destPath);
    const destPathNew = path.join(destPathFixed, path.basename(filePathFixed));

    const readStream = createReadStream(filePathFixed);
    const writeStream = createWriteStream(destPathNew);

    await pipeline(readStream, writeStream);
  } catch (err) {
    console.error(new Error('Operation failed'));
  }
};
