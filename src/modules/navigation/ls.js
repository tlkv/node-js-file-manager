import * as path from 'path';
import { EOL } from 'os';
import { printMessage } from '../../_utils/printMessage.js';
import { readdir } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../../_utils/utils.js';

export const ls = async () => {
  try {
    const res = await readdir(process.env.WORK_DIRECTORY);
    if (res.length === 0) {
      printMessage('Directory is empty');
    } else {
      printMessage(res.join(EOL));
    }
  } catch {
    console.error(new Error('Operation failed (not permitted to read this folder)'));
  }
};
