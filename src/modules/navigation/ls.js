import * as path from 'path';
import { EOL } from 'os';
import { printMessage } from '../../_utils/printMessage.js';
import { readdir } from 'fs/promises';
import { dirAndFileNames, checkExists } from '../../_utils/utils.js';

export const ls = async () => {
  const res = await readdir(process.env.USER_DIRECTORY);
  if (res.length === 0) {
    printMessage('Directory is empty');
  } else {
    printMessage(res.join(EOL));
  }
};
