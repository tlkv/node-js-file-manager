import * as path from 'path';
import { rm as rem } from 'node:fs/promises';

export const rm = async inputStr => {
  try {
    const argPath = inputStr.toString().slice(3);
    if (argPath.length === 0) {
      throw new Error('Operation failed');
    }

    const tempPath = path.join(process.env.WORK_DIRECTORY, argPath);
    const fixedPath = path.normalize(tempPath);

    await rem(fixedPath);
  } catch (err) {
    console.error(new Error('Operation failed'));
  }
};
