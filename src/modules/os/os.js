import { EOL, userInfo, arch, cpus, homedir } from 'os';
import { printMessage } from '../../_utils/printMessage.js';

export const osFunc = inputStr => {
  try {
    if (inputStr === 'os --homedir') {
      printMessage(homedir);
    } else if (inputStr === 'os --EOL') {
      printMessage(`Your system EOL is: ${JSON.stringify(EOL)}`);
    } else if (inputStr === 'os --username') {
      printMessage(userInfo().username);
    } else if (inputStr === 'os --architecture') {
      printMessage(arch());
    } else if (inputStr === 'os --cpus') {
      const procData = cpus();
      console.table(procData.map(i => ({ model: i.model, speed: Math.round(i.speed / 1000) })));
      printMessage(`Number of logical(!) cores: ${procData.length}`);
    } else {
      throw new Error('Operation failed');
    }
  } catch (err) {
    console.error(err);
  }
};
