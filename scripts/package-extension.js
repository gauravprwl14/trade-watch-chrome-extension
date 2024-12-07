const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

// Configuration
const BUILD_DIR = path.resolve(__dirname, '../.next');
const DIST_DIR = path.resolve(__dirname, '../dist');
const EXTENSION_FILES = [
    'manifest.json',
    'background.js',
    'contentScript.js',
    'styles.css',
    { from: 'public/icons', to: 'icons' }
];

async function packageExtension() {
    console.log('� Packaging extension...');

    // Ensure dist directory exists
    if (!fs.existsSync(DIST_DIR)) {
        fs.mkdirSync(DIST_DIR, { recursive: true });
    }

    // Create a file to stream archive data to
    const output = fs.createWriteStream(path.join(DIST_DIR, 'extension.zip'));
    const archive = archiver('zip', {
        zlib: { level: 9 } // Maximum compression
    });

    // Listen for archive events
    output.on('close', () => {
        console.log(`✅ Extension packaged successfully! (${archive.pointer()} bytes)`);
    });

    archive.on('error', (err) => {
        throw err;
    });

    // Pipe archive data to the file
    archive.pipe(output);

    // Copy and add extension files
    for (const file of EXTENSION_FILES) {
        if (typeof file === 'string') {
            const filePath = path.resolve(__dirname, '..', file);
            if (fs.existsSync(filePath)) {
                archive.file(filePath, { name: file });
            }
        } else {
            // Handle directory copying
            const fromDir = path.resolve(__dirname, '..', file.from);
            if (fs.existsSync(fromDir)) {
                archive.directory(fromDir, file.to);
            }
        }
    }

    // Add built Next.js files
    archive.directory(BUILD_DIR, 'app');

    // Finalize the archive
    await archive.finalize();
}

// Run the packaging
packageExtension().catch(console.error); 