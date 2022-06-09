import { printMessage } from './printMessage.js';

export const printDirectory = () => {
  printMessage(`You are currently in ${process.env.USER_DIRECTORY}`);
};
