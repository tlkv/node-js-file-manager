import { pipeline, Transform } from 'stream';

export const transform = async () => {
  const reversed = new Transform({
    transform(chunk, _, cb) {
      cb(undefined, chunk.toString('utf-8').split('').reverse().join('') + '\n');
    },
  });

  console.log('Write your data (CTRL + C to exit): ');

  pipeline(process.stdin, reversed, process.stdout, err => {
    console.error(err);
  });
};

transform();
