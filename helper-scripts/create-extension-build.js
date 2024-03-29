const fs = require('fs');
const path = require('path');

function main() {

    // extract version from manifest.json
    const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '../manifest.json'), 'utf8'));
    const version = manifest.version;

    // Extract name from _locales/en/messages.json
    const messages = JSON.parse(fs.readFileSync(path.join(__dirname, '../_locales/en/messages.json'), 'utf8'));
    const extensionName = messages.appName.message;

    // remove build dir if exists and re-create
    if (fs.existsSync(path.join(__dirname, '../extension-build'))) {
        fs.rmSync(path.join(__dirname, '../extension-build'), { recursive: true });
    }
    fs.mkdirSync(path.join(__dirname, '../extension-build'));

    // copy content of /dist directory to /extension-build
    const distFiles = fs.readdirSync(path.join(__dirname, '../dist'));
    distFiles.forEach((file) => {
        const src = path.join(__dirname, '../dist', file);
        const dest = path.join(__dirname, '../extension-build', file);
        if (fs.existsSync(src)) {
            fs.cpSync(src, dest, { recursive: true });
        }
    });

    // copy other files that are required for extension
    const toCopy = [
        '_locales',
        'manifest.json',
        'extension-worker.js'
    ];

    toCopy.forEach((file) => {
        const src = path.join(__dirname, '../', file);
        const dest = path.join(__dirname, '../extension-build', file);
        if (fs.existsSync(src)) {
            fs.cpSync(src, dest, { recursive: true });
        }
    });

    // create zip file from all files and directories of 'build' directory
    const zip = require('adm-zip');
    const zipFile = new zip();
    zipFile.addLocalFolder(path.join(__dirname, '../extension-build'));
    zipFile.writeZip(path.join(__dirname, `../extension-build/${extensionName} ${version}.zip`));

    console.log('done');
}

main();
