import { printDirectory } from './printDirectory.js';
import { printMessage } from './printMessage.js';
import { userNameParse } from './userNameParse.js';

export const userWelcome = () => {
  const userName = userNameParse();
  printMessage(`Welcome to the File Manager, ${userName}!`);
  printDirectory();
};
