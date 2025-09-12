import fs from 'fs-extra';
import logger from 'jet-logger';
import childProcess from 'child_process';

/**
 * Start
 */
(async () => {
  try {
    // Remove current build
    await remove('./dist/');

    // Run lint but don't fail the build on errors (cross-platform safe)
    try {
      await exec('npm run lint -- --quiet --max-warnings=Infinity', './');
    } catch (err) {
      logger.warn('Lint failed or had warnings, continuing build...');
    }

    // TypeScript build
    await exec('tsc --build tsconfig.prod.json', './');
    
    // Copy files/directories only if they exist
    await copyIfExists('./temp/config.js', './config.js');
    await copyIfExists('./temp/src', './dist');
    await copyIfExists('./src/generated/prisma', './dist/generated/prisma');

    
    // Clean up temp directory if it exists
    if (await exists('./temp/')) {
      await remove('./temp/');
    }
  } catch (err) {
    logger.err(err);
    // eslint-disable-next-line n/no-process-exit
    process.exit(1);
  }
})();

/**
 * Check if file/directory exists
 */
async function exists(path: string): Promise<boolean> {
  try {
    await fs.access(path);
    return true;
  } catch {
    return false;
  }
}

/**
 * Copy file/directory only if source exists
 */
async function copyIfExists(src: string, dest: string): Promise<void> {
  if (await exists(src)) {
    logger.info(`Copying ${src} to ${dest}`);
    await copy(src, dest);
  } else {
    logger.warn(`Source path ${src} does not exist, skipping copy`);
  }
}

/**
 * Remove file
 */
function remove(loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.remove(loc, err => {
      return (!!err ? rej(err) : res());
    });
  });
}

/**
 * Copy file.
 */
function copy(src: string, dest: string): Promise<void> {
  return new Promise((res, rej) => {
    return fs.copy(src, dest, err => {
      return (!!err ? rej(err) : res());
    });
  });
}

/**
 * Do command line command.
 */
function exec(cmd: string, loc: string): Promise<void> {
  return new Promise((res, rej) => {
    return childProcess.exec(cmd, { cwd: loc }, (err, stdout, stderr) => {
      if (!!stdout) {
        logger.info(stdout);
      }
      if (!!stderr) {
        logger.warn(stderr);
      }
      return (!!err ? rej(err) : res());
    });
  });
}
