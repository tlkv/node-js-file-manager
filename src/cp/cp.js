import * as path from 'path';
import * as child from 'child_process';
import { dirAndFileNames } from '../_utils/utils.js';

export const spawnChildProcess = async args => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const filePath = path.join(__dirname, 'files', 'script.js');
  const cp = child.fork(filePath, args);
};

spawnChildProcess(process.argv);
