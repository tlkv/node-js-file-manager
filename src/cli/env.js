export const parseEnv = () => {
  console.log(
    Object.keys(process.env)
      .filter(i => i.startsWith('RSS_'))
      .map(i => `${i}=${process.env[i]}`)
      .join('; '),
  );
};

parseEnv();
