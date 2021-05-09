const { override, fixBabelImports ,addWebpackResolve,addDecoratorsLegacy} = require('customize-cra');
const path = require('path')
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    }),
    addDecoratorsLegacy(),
    addWebpackResolve({
        extensions:['.js','.jsx','.json'],
        alias:{
            '@config':path.resolve(__dirname,'src/config')
        }
    })
);