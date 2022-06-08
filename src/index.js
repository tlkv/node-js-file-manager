import * as path from 'path';
import * as fs from 'fs/promises';
import * as readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { homedir } from 'os';

const start = () => {
  // const file = fs.createWriteStream(path.join(__dirname, 'file.txt'));
  const rl = readline.createInterface({ input, output });

  output.write('Hello! Please, write your text: \n');

  rl.on('line', line => {
    console.log('line entered');
    /* line.trim().toLowerCase() === 'exit' ? rl.close() : file.write(line + '\n'); */
  });

  process.on('SIGINT', rl.close);

  rl.on('close', () => {
    output.write('\nGood luck!');
    process.exit(0);
  });
};

start();
