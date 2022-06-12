import * as path from 'path';
import { createReadStream } from 'node:fs';
import { pipeline } from 'node:stream/promises';
import { createHash } from 'node:crypto';

export const hash = async inputStr => {
  try {
    const argPath = inputStr.toString().slice(5);
    if (argPath.length === 0) {
      throw new Error('Operation failed');
    }

    const tempPath = path.join(process.env.WORK_DIRECTORY, argPath);
    const fixedPath = path.normalize(tempPath);

    const readStream = createReadStream(fixedPath);
    const hashStream = createHash('sha256');

    await pipeline(readStream, hashStream);

    return hashStream.digest('hex');
  } catch {
    console.error(new Error('Operation failed'));
  }
};
