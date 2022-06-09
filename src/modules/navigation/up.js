import * as path from 'path';

export const up = () => {
  process.env.USER_DIRECTORY = path.join(process.env.USER_DIRECTORY, '..');
};
