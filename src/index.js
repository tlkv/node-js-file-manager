import * as path from 'path';
import * as fs from 'fs/promises';
import * as readline from 'readline';
import { EOL } from 'os';
import { stdin as input, stdout as output } from 'process';
import { homedir } from 'os';
import { userWelcome } from './_utils/userWelcome.js';
import { userGoodbye } from './_utils/userGoodbye.js';
import { up } from './modules/navigation/up.js';
import { printDirectory } from './_utils/printDirectory.js';
import { ls } from './modules/navigation/ls.js';
import { cd } from './modules/navigation/cd.js';

const start = () => {
  process.env.USER_DIRECTORY = homedir;
  const rl = readline.createInterface({ input, output });
  userWelcome();
  rl.on('line', async line => {
    switch (line) {
      case '.exit':
        rl.close();
        break;
      case 'up':
        up();
        printDirectory();
        break;
      case 'ls':
        await ls();
        printDirectory();
        break;
      case 'cd':
        cd();
        printDirectory();
        break;
      default:
        output.write('Line entered' + EOL);
        break;
    }
  });

  process.on('SIGINT', rl.close);

  rl.on('close', () => {
    userGoodbye();
    process.exit(0);
  });
};

start();
