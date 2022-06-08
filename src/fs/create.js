import * as path from 'path';
import { writeFile } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../_utils/utils.js';

export const create = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const filePath = path.join(__dirname, 'files', 'fresh.txt');

  try {
    const exists = await checkExists(filePath);

    if (exists) {
      throw new Error('FS operation failed');
    }

    await writeFile(filePath, 'I am fresh and young', { flag: 'wx' });
  } catch (err) {
    console.error(err);
  }
};

create();
