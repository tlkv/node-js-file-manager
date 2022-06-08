import * as path from 'path';
import * as fs from 'fs/promises';
import { dirAndFileNames, checkExists } from '../_utils/utils.js';

export const rename = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files', 'wrongFilename.txt');
  const destPath = path.join(__dirname, 'files', 'properFilename.md');

  try {
    const sourceExists = await checkExists(sourcePath);
    const destExists = await checkExists(destPath);

    if (!sourceExists || destExists) {
      throw new Error('FS operation failed');
    }

    await fs.rename(sourcePath, destPath);
  } catch (err) {
    console.error(err);
  }
};

rename();
