import * as path from 'path';
import { cp } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../_utils/utils.js';

export const copy = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files');
  const destPath = path.join(__dirname, 'files_copy');

  try {
    const sourceExists = await checkExists(sourcePath);
    const destExists = await checkExists(destPath);

    if (!sourceExists || destExists) {
      throw new Error('FS operation failed');
    }

    await cp(sourcePath, destPath, {
      force: false,
      recursive: true,
      errorOnExist: true,
    });
  } catch (err) {
    console.error(err);
  }
};

copy();
