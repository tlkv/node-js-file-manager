import * as path from 'path';
import { createWriteStream } from 'node:fs';

export const add = async inputStr => {
  try {
    const argPath = inputStr.toString().slice(4);
    if (argPath.length === 0) {
      throw new Error('Operation failed');
    }

    const tempPath = path.join(process.env.WORK_DIRECTORY, argPath);
    const fixedPath = path.normalize(tempPath);

    const writeStream = createWriteStream(fixedPath);
    writeStream.on('error', () => {
      throw new Error('Operation failed');
    });
    writeStream.close();
  } catch (err) {
    console.error(err);
  }
};
