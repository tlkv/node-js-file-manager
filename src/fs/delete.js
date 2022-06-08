import * as path from 'path';
import { unlink } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../_utils/utils.js';

export const remove = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files', 'fileToRemove.txt');
  try {
    const sourceExists = await checkExists(sourcePath);
    if (!sourceExists) {
      throw new Error('FS operation failed');
    }

    await unlink(sourcePath);
  } catch (err) {
    console.error(err);
  }
};

remove();
