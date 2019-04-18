import { scan } from './index';
import { compare } from '@beenotung/tslib/compare';
import { format_byte } from '@beenotung/tslib/format';

function main(root = '.') {
  scan(root)
    .then(files => {
      files.sort((a, b) => -compare(a.size, b.size));
      files.forEach(file => console.log(file.size, format_byte(file.size), file.pathname));
      // console.log(files)
    })
    .catch(e => {
      console.error(e);
      process.exit(1);
    });
}

main(process.argv[2]);
