#!/usr/bin/env ts-node

const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

const pkg = require('../package.json');

const DIR_NAME = 'sketch-plugin-template.sketchplugin';
const DEST_DIR = path.join(__dirname, '../sketch-plugin-template.sketchplugin');
const DEST_ZIP_DIR = path.join(__dirname, '../dist-zip');

const extractExtensionData = () => {
  return {
    name: pkg.name,
    version: pkg.version,
  };
};

const makeDestZipDirIfNotExists = () => {
  if (!fs.existsSync(DEST_ZIP_DIR)) {
    fs.mkdirSync(DEST_ZIP_DIR);
  }
};

const buildZip = (src: string, dist: string, zipFilename: string) => {
  console.info(`📦 Building ${zipFilename}...`);

  const archive = archiver('zip', { zlib: { level: 9 } });
  const stream = fs.createWriteStream(path.join(dist, zipFilename));

  return new Promise<void>((resolve, reject) => {
    archive
      .directory(src, DIR_NAME)
      .on('error', (err: any) => reject(err))
      .pipe(stream);

    stream.on('close', () => resolve());
    archive.finalize().then();
  });
};

const main = () => {
  const { name, version } = extractExtensionData();
  const zipFilename = `${name}-v${version}.zip`;
  const zipDistName = `${name}.zip`;

  makeDestZipDirIfNotExists();

  buildZip(DEST_DIR, DEST_ZIP_DIR, zipFilename)
    .then(() => console.info('✅  Build Done with Version!'))
    .catch(console.error);

  buildZip(DEST_DIR, DEST_ZIP_DIR, zipDistName)
    .then(() => console.info('✅  Build Done!'))
    .catch(console.error);
};

main();
