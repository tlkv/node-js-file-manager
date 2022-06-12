import * as readline from 'readline';
import { EOL, homedir } from 'os';
import { stdin as input, stdout as output } from 'process';
import { userWelcome } from './_utils/userWelcome.js';
import { userGoodbye } from './_utils/userGoodbye.js';
import { printDirectory } from './_utils/printDirectory.js';
import { printMessage } from './_utils/printMessage.js';

import { up } from './modules/navigation/up.js';
import { ls } from './modules/navigation/ls.js';
import { hash } from './modules/hash/hash.js';
import { cat } from './modules/fs/cat.js';
import { cd } from './modules/navigation/cd.js';
import { osFunc } from './modules/os/os.js';
import { decompress } from './modules/compress/decompress.js';
import { compress } from './modules/compress/compress.js';

const start = () => {
  process.env.WORK_DIRECTORY = homedir;
  const rl = readline.createInterface({ input, output });
  userWelcome();
  rl.on('line', async line => {
    if (line === '.exit') {
      rl.close();
    } else if (line === 'up') {
      up();
    } else if (line === 'ls') {
      await ls();
    } else if (line.startsWith('cd ')) {
      await cd(line);
    } else if (line.startsWith('os ')) {
      osFunc(line);
    } else if (line.startsWith('hash ')) {
      const fHash = await hash(line);
      if (fHash) {
        printMessage(`File's hash is: ${fHash}`);
      }
    } else if (line.startsWith('cat ')) {
      await cat(line);
    } else if (line.startsWith('compress ')) {
      await compress(line);
    } else if (line.startsWith('decompress ')) {
      await decompress(line);
    } else if (
      line === 'cd' ||
      line === 'os' ||
      line === 'hash' ||
      line === 'cat' ||
      line === 'compress' ||
      line === 'decompress'
    ) {
      console.error(new Error('Operation failed - no args specified'));
    } else {
      output.write('Invalid input' + EOL);
    }
    if (line !== '.exit' && !line.startsWith('cat ')) {
      printDirectory();
    }
  });

  process.on('SIGINT', rl.close);

  rl.on('close', () => {
    userGoodbye();
    process.exit(0);
  });
};

start();
