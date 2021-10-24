# large-files
cli tool to find out large files under given directory

[![npm Package Version](https://img.shields.io/npm/v/large-files.svg?maxAge=2592000)](https://www.npmjs.com/package/large-files)

## Usage

**Usage without installation**
```bash
npx large-files
```

**Usage with installation** (recommended)
```bash
# install
npm i -g large-files

# usage
large-files
```

**Sample output**
```bash
> large-files | head -n 5
8903215 8.49 MB node_modules/typescript/lib/tsserver.js
8867303 8.46 MB node_modules/typescript/lib/tsserverlibrary.js
8328167 7.94 MB node_modules/typescript/lib/typescriptServices.js
8328160 7.94 MB node_modules/typescript/lib/typescript.js
6353077 6.06 MB node_modules/typescript/lib/typingsInstaller.js
```

## License

This project is licensed with [BSD-2-Clause](./LICENSE)

This is free, libre, and open-source software. It comes down to four essential freedoms [[ref]](https://seirdy.one/2021/01/27/whatsapp-and-the-domestication-of-users.html#fnref:2):

- The freedom to run the program as you wish, for any purpose
- The freedom to study how the program works, and change it so it does your computing as you wish
- The freedom to redistribute copies so you can help others
- The freedom to distribute copies of your modified versions to others
