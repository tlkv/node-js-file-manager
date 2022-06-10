import * as path from 'path';
import * as fs from 'fs/promises';
import * as readline from 'readline';
import { EOL, userInfo } from 'os';
import { stdin as input, stdout as output } from 'process';
import { homedir } from 'os';
import { userWelcome } from './_utils/userWelcome.js';
import { userGoodbye } from './_utils/userGoodbye.js';
import { up } from './modules/navigation/up.js';
import { printDirectory } from './_utils/printDirectory.js';
import { printMessage } from './_utils/printMessage.js';
import { ls } from './modules/navigation/ls.js';
import { cd } from './modules/navigation/cd.js';

const start = () => {
  process.env.WORK_DIRECTORY = homedir;
  const rl = readline.createInterface({ input, output });
  userWelcome();
  rl.on('line', async line => {
    if (line === '.exit') {
      rl.close();
    } else if (line === 'up') {
      up();
      printDirectory();
    } else if (line === 'ls') {
      await ls();
      printDirectory();
    } else if (line.startsWith('cd ')) {
      await cd(line);
      printDirectory();
    } else if (line === 'os --homedir') {
      printMessage(homedir);
      printDirectory();
    } else if (line === 'os --EOL') {
      EOL === '\r\n' ? printMessage('Your system EOL is: \\r\\n') : printMessage('Your system EOL is: \\n');
      printDirectory();
    } else if (line === 'os --username') {
      printMessage(userInfo().username);
      printDirectory();
    } else {
      output.write('Invalid input' + EOL);
    }
  });

  process.on('SIGINT', rl.close);

  rl.on('close', () => {
    userGoodbye();
    process.exit(0);
  });
};

start();
