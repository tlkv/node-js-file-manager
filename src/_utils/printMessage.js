import { EOL } from 'os';

export const printMessage = text => {
  process.stdout.write(text + EOL);
};
