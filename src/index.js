import * as path from 'path';
import * as fs from 'fs/promises';
import * as readline from 'readline';
import { EOL } from 'os';
import { stdin as input, stdout as output } from 'process';
import { homedir } from 'os';
import { userWelcome } from './_utils/userWelcome.js';
import { userGoodbye } from './_utils/userGoodbye.js';

const start = () => {
  process.env.USER_DIRECTORY = homedir;
  const rl = readline.createInterface({ input, output });
  userWelcome();
  rl.on('line', line => {
    if (line.trim().toLowerCase() === '.exit') {
      userGoodbye();
      rl.close();
    } else {
      output.write('Line entered' + EOL);
    }
  });

  process.on('SIGINT', rl.close);

  rl.on('close', () => {
    userGoodbye();
    process.exit(0);
  });
};

start();
