const meow = require('meow');
const readPkgUp = require('read-pkg-up');
const writePkg = require('write-pkg');

const cli = meow(
  `
    Usage
      $ cd directoryOfPkg
      $ directoryOfPkg > toggle-pkg-privacy --private
      $ directoryOfPkg > toggle-pkg-privacy --public
 
    Options
      --public, - Set pkg json public
      --private, -  Set pkg json private
 
    Examples
      $ directoryOfPkg > toggle-pkg-privacy --public
      $ directoryOfPkg > toggle-pkg-privacy --private
`,
  {
    flags: {
      public: {
        type: 'boolean',
        alias: 'p',
      },
      private: {
        type: 'boolean',
        alias: 'pr',
      },
    },
  }
);
console.log(cli.flags);
if (cli.flags.public && cli.flags.private) {
  throw new Error('Use either private or public flags. Not both');
}

const result = readPkgUp.sync();
if (result && result.packageJson) {
  console.log(cli.private);
  console.log(result.packageJson);
  if (cli.flags.public) {
    result.packageJson.private = false;
  }
  if (cli.flags.private) {
    result.packageJson.private = true;
  }
  writePkg(result.packageJson);
}
