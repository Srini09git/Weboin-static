// next.config.js
const path = require('path');

module.exports = {
    webpack(config) {
        config.module.rules.push({
            test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/,
            use: {
                loader: 'file-loader',
                options: {
                    outputPath: 'static/media/',
                    publicPath: '/_next/static/media/',
                    name: '[name].[hash].[ext]',
                },
            },
           
        });

        return config;
    },
    images: {
        domains: ['img.freepik.com'],
      },
    
};
