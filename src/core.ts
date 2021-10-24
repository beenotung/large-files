import * as fs from 'fs';
import * as path from 'path';
import * as util from 'util';

/* tslint:disable */
// follow symbolic link
const stat = util.promisify(fs.stat);

// does not follow symbolic link
const lstat = util.promisify(fs.lstat);
/* tslint:enable */

export interface File {
  // dirname: string
  // filename: string
  pathname: string;
  size: number;
}

export function scan(dirname: string): Promise<File[]> {
  return new Promise<File[]>((resolve, reject) => {
    fs.readdir(dirname, (e, ds) => {
      if (e) {
        reject(e);
        return;
      }
      let files: File[] = [];
      Promise.all(
        ds.map(filename => {
          const pathname = path.join(dirname, filename);
          return lstat(pathname).then(stat => {
            if (stat.isFile()) {
              files.push({
                // dirname,
                // filename,
                pathname,
                size: stat.size,
              });
            }
            if (stat.isDirectory()) {
              return scan(pathname).then(fs => (files = files.concat(fs)));
            }
          });
        }),
      ).then(() => resolve(files));
    });
  });
}
