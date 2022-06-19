import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { access } from 'fs/promises';

export const dirAndFileNames = url => {
  const __filename = fileURLToPath(url);
  const __dirname = dirname(__filename);
  return { __filename, __dirname };
};

export const checkExists = async path => {
  try {
    await access(path);
    return true;
  } catch (err) {
    return false;
  }
};
