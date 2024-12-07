module.exports = {
    // Entry points for extension-specific code
    entry: {
        background: './src/background/index.ts',
        contentScript: './src/content/index.ts',
        popup: './src/popup/index.tsx'
    },

    // Files to copy to dist
    copyFiles: [
        'manifest.json',
        { from: 'public/icons', to: 'icons' },
        { from: 'public/assets', to: 'assets' }
    ],

    // Build output configuration
    output: {
        dir: 'dist',
        clean: true
    },

    // Development server configuration
    devServer: {
        port: 3000,
        hot: true
    }
}; 