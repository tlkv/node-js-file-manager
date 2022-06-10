import * as path from 'path';
import { printMessage } from '../../_utils/printMessage.js';
import { checkExists } from '../../_utils/utils.js';

export const cd = async inputStr => {
  let argPath;
  try {
    argPath = inputStr.toString().slice(3);
    if (argPath.length === 0) {
      throw new Error('Invalid input');
    }
    const tempPath = path.resolve(process.env.USER_DIRECTORY, argPath);
    const fixedPath = path.normalize(tempPath);
    const dirExists = await checkExists(fixedPath);
    if (dirExists) {
      process.env.USER_DIRECTORY = fixedPath;
    } else {
      throw new Error('Directory does not exist!');
    }
  } catch (err) {
    console.error(err);
  }
};
