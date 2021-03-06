'use strict';

const
  fs   = require('fs'),
  path = require('path'),
  readline = require('readline'),
  createInterface = readline.createInterface;

const rl = createInterface(process.stdin, process.stdout);

const BLOCKS_DIR = path.join(__dirname, 'src/blocks/');

const fileSources = {
  pug: `mixin {blockName}() \n\t+b.{blockName}`,
  scss: `.{blockName} {\n}`
};

function validateBlockName(blockName) {
  return new Promise((resolve, reject) => {
    const isValid = /^(\d|\w|-)+$/.test(blockName);

    if (isValid) {
      resolve(isValid);
    } else {
      const errMsg = (
        `ERR>>> An incorrect block name '${blockName}'\n` +
        `ERR>>> A block name must include letters, numbers & the minus symbol.`
      );
      reject(errMsg);
    }
  });
}

function directoryExist(blockPath, blockName) {
  return new Promise((resolve, reject) => {
    fs.stat(blockPath, notExist => {
      if (notExist) {
        resolve();
      } else {
        reject(`ERR>>> The block '${blockName}' already exists.`);
      }
    });
  });
}

function createDir(dirPath) {
  return new Promise((resolve, reject) => {
    fs.mkdir(dirPath, err => {
      if (err) {
        reject(`ERR>>> Failed to create a folder '${dirPath}'`);
      } else {
        resolve();
      }
    });
  });
}

function createFiles(blocksPath, blockName) {
  const promises = [];
  Object.keys(fileSources).forEach(ext => {
    const fileSource = fileSources[ext].replace(/\{blockName}/g, blockName);
    const filename = `${blockName}.${ext}`;
    const filePath = path.join(blocksPath, filename);

    promises.push(
        new Promise((resolve, reject) => {
          fs.writeFile(filePath, fileSource, 'utf8', err => {
            if (err) {
              reject(`ERR>>> Failed to create a file '${filePath}'`);
            } else {
              resolve();
            }
          });
        })
    );
  });

  return Promise.all(promises);
}

function getFiles(blockPath) {
  return new Promise((resolve, reject) => {
    fs.readdir(blockPath, (err, files) => {
      if (err) {
        reject(`ERR>>> Failed to get a file list from a folder '${blockPath}'`);
      } else {
        resolve(files);
      }
    });
  });
}

function sassConnect(blockName) {
  return new Promise((resolve, reject) => {
    fs.appendFile(`src/style/style.scss`, `\n@import '../blocks/${blockName}/${blockName}.scss';`, err => {
      if (err) {
        reject(`ERR>>> Failed to rewrite style/style.scss`);
      } else {
        resolve();
      }
    });
  });
}

function printErrorMessage(errText) {
  console.log(errText);
  rl.close();
}

function initMakeBlock(candidateBlockName) {
  const blockNames = candidateBlockName.trim().split(/\s+/);

  const makeBlock = blockName => {
    const blockPath = path.join(BLOCKS_DIR, blockName);

    return validateBlockName(blockName)
      .then(() => directoryExist(blockPath, blockName))
      .then(() => createDir(blockPath))
      .then(() => createFiles(blockPath, blockName))
      .then(() => getFiles(blockPath))
      .then(files => {
        const line = '-'.repeat(48 + blockName.length);
        console.log(line);
        console.log(`The block has just been created in 'src/blocks/${blockName}'`);
        console.log(line);

        files.forEach(file => console.log(file));

        rl.close();
      })
      .then(() => sassConnect(blockName));
  };

  if (blockNames.length === 1) {
    return makeBlock(blockNames[0]);
  }

  const promises = blockNames.map(name => makeBlock(name));
  return Promise.all(promises);
}

const blockNameFromCli = process.argv
    .slice(2)
    .join(' ');

if (blockNameFromCli !== '') {
  initMakeBlock(blockNameFromCli).catch(printErrorMessage);
} else {
  rl.setPrompt('Block(s) name: ');
  rl.prompt();
  rl.on('line', (line) => {
    initMakeBlock(line).catch(printErrorMessage);
  });
}
