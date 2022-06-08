import * as path from 'path';
import { readFile } from 'fs/promises';
import { createHash } from 'crypto';
import { dirAndFileNames } from '../_utils/utils.js';

export const calculateHash = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
  const temp = await readFile(filePath);
  const hash = createHash('sha256');
  hash.update(temp);
  console.log(hash.digest('hex'));
};

calculateHash();
