import * as path from 'path';
import { pipeline } from 'stream/promises';
import { createGunzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { dirAndFileNames } from '../_utils/utils.js';

export const decompress = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files', 'archive.gz');
  const destPath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const zipFunc = createGunzip();
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(destPath);

  return pipeline(readStream, zipFunc, writeStream)
    .then(() => {
      console.log('Decompression finished');
    })
    .catch(err => {
      console.error(err);
    });
};

decompress();
