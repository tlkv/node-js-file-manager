export const userNameParse = () => {
  const args = process.argv[2];

  if (!args) throw new Error('No username passed');
  const isNamePassed = args.startsWith('--username=');

  if (!isNamePassed) throw new Error('Specified argument argument is not valid');
  const userName = args.slice(11, args.length);

  return userName;
};
