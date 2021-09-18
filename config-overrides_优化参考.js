const { override, fixBabelImports, addLessLoader, addDecoratorsLegacy, addWebpackResolve, disableEsLint } = require('customize-cra')

//  自带的 UglifyJsPlugin 压缩插件时单线程执行的，而 webpack-parallel-uglify-plugin可以并行执行
const ParalleUglifyPlugin = require('webpack-parallel-gulify-plugin')
// 包分析工具
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const ENV = process.env.NODE_ENV

const setWebpackPlugin = (config) => {
    if (ENV !== 'development') {
        config.plugins.push(
            new ParalleUglifyPlugin({
                uglifyJS: {
                    output: {
                        // 是否输出可读性较强的代码，即会保留空格和制表符，默认为输出，为了达到更好的压缩效果
                        // 可以设置为false
                        beautify: false,
                        // 是否保留代码中的注视，默认为保留
                        comments: false
                    },
                    compress: {
                        drop_console: true,
                        drop_debugger: true
                    }
                }
            }),
            new BundleAnalyzerPlugin({
                //  可以是`server`，`static`或`disabled`。
                //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
                //  在“静态”模式下，会生成带有报告的单个HTML文件。
                //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
                analyzerMode: 'server',
                //  将在“服务器”模式下使用的主机启动HTTP服务器。
                analyzerHost: '127.0.0.1',
                //  将在“服务器”模式下使用的端口启动HTTP服务器。
                analyzerPort: 8888,
                //  路径捆绑，将在`static`模式下生成的报告文件。
                //  相对于捆绑输出目录。
                reportFilename: 'report.html',
                //  模块大小默认显示在报告中。
                //  应该是`stat`，`parsed`或者`gzip`中的一个。
                //  有关更多信息，请参见“定义”一节。
                defaultSizes: 'parsed',
                //  在默认浏览器中自动打开报告
                openAnalyzer: true,
                //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
                generateStatsFile: false,
                //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
                //  相对于捆绑输出目录。
                statsFilename: 'stats.json',
                //  stats.toJson（）方法的选项。
                //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
                //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
                statsOptions: null,
                logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'。
            })
        )
    }

    // 修改打包后的文件名
    config.output.chunkFilename = ENV == 'development' ? 'js/chunk.[name].js' : 'js/chunk.[name].[chunkhash:8].js'
    config.output.filename = ENV == 'development' ? 'js/[name].js' : 'js/[name].[chunkhash:8]'
    return config
}


const setWebpackConfig = (config) => {
    if (process.argv.includes('--stage')) {
        config.plugins[0].options.template = path.resolve('public/index_dev.html')
    }
    return config
}

// 打包关闭souremap静态文件
process.env.GENERATE_SOURCEMAP = ENV == 'development' ? true : false


module.exports = override(
    disableEsLint(), // 禁用eslint
    setWebpackConfig(),
    setWebpackPlugin(),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addLessLoader({
        javascriptEnabled: true
    }),
    addDecoratorsLegacy(),
    addWebpackResolve({
        extensions: ['.js', '.jsx', '.json'],
        // 配置目录别名
        alias: {
            '@config': path.resolve(__dirname, 'src/config')
        }
    })
);