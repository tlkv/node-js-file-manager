import * as path from 'path';
import { readFile } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../_utils/utils.js';

export const read = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files', 'fileToRead.txt');
  try {
    const sourceExists = await checkExists(sourcePath);
    if (!sourceExists) {
      throw new Error('FS operation failed');
    }

    const res = await readFile(sourcePath, { encoding: 'utf-8' });
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

read();
