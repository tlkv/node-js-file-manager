import { printMessage } from './printMessage.js';
import { userNameParse } from './userNameParse.js';

export const userGoodbye = () => {
  const userName = userNameParse();
  printMessage(`Thank you for using File Manager, ${userName}`);
};
