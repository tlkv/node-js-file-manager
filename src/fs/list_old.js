import * as path from 'path';
import { readdir } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../_utils/utils.js';

export const list = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files');
  try {
    const sourceExists = await checkExists(sourcePath);
    if (!sourceExists) {
      throw new Error('FS operation failed');
    }

    const res = await readdir(sourcePath);
    res.forEach(i => console.log(path.basename(i, path.extname(i))));
  } catch (err) {
    console.error(err);
  }
};

list();
