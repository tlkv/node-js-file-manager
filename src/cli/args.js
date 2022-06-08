export const parseArgs = () => {
  const [...argv] = process.argv;
  let res = [];

  for (let i = 2; i < argv.length; i += 2) {
    res = [...res, `${argv[i].slice(2)} is ${argv[i + 1]}`];
  }

  console.log(res.join(', '));
};

parseArgs();
