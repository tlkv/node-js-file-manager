import * as path from 'path';
import { createReadStream } from 'node:fs';
import { printDirectory } from '../../_utils/printDirectory.js';
import { printMessage } from '../../_utils/printMessage.js';
import { checkExists } from '../../_utils/utils.js';
import { EOL } from 'os';

export const cat = async inputStr => {
  try {
    const argPath = inputStr.toString().slice(4);
    if (argPath.length === 0) {
      throw new Error('Operation failed');
    }
    const tempPath = path.join(process.env.WORK_DIRECTORY, argPath);
    const fixedPath = path.normalize(tempPath);

    const fileExists = await checkExists(fixedPath);
    if (!fileExists) {
      throw new Error('Operation failed');
    }

    const readStream = createReadStream(fixedPath, {
      encoding: 'utf-8',
    });

    readStream.on('data', chunk => printMessage(chunk));
    readStream.on('end', () => {
      printDirectory();
    });
    readStream.on('error', () => {
      printDirectory();
      throw new Error('Operation failed');
    });
  } catch (err) {
    console.error(err);
  }
};
