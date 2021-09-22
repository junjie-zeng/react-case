const { override, fixBabelImports, addWebpackResolve, addDecoratorsLegacy,disableEsLint } = require('customize-cra');
const path = require('path')
module.exports = override(
    // fixBabelImports('import', {
    //     libraryName: 'antd',
    //     libraryDirectory: 'es',
    //     style: 'css',
    // }),
    // disableEsLint(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addDecoratorsLegacy(),
    addWebpackResolve({
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            '@config': path.resolve(__dirname, 'src/config')
        }
    })
);

