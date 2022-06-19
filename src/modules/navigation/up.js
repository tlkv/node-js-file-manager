import * as path from 'path';

export const up = () => {
  process.env.WORK_DIRECTORY = path.join(process.env.WORK_DIRECTORY, '..');
};
