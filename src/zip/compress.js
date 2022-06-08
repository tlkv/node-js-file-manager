import * as path from 'path';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { dirAndFileNames } from '../_utils/utils.js';

export const compress = async () => {
  const { __dirname } = dirAndFileNames(import.meta.url);
  const sourcePath = path.join(__dirname, 'files', 'fileToCompress.txt');
  const destPath = path.join(__dirname, 'files', 'archive.gz');
  const zipFunc = createGzip();
  const readStream = createReadStream(sourcePath);
  const writeStream = createWriteStream(destPath);

  return pipeline(readStream, zipFunc, writeStream)
    .then(() => {
      console.log('Compression finished');
    })
    .catch(err => {
      console.error(err);
    });
};

compress();
