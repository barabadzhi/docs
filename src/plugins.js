const { ProvidePlugin, DefinePlugin } = require('webpack');
const CopyPlugin = require("copy-webpack-plugin");

const webpackPlugin = (context, options) => {
    return {
        name: 'webpack-plugin',
        configureWebpack(config) {
            return {
                plugins: [
                    new DefinePlugin({
                        "process.env.DEBUG": "runtime_process_env.DEBUG"
                    }),
                    new ProvidePlugin({
                        process: require.resolve('process/browser'),
                        "NovoRender": require.resolve('@novorender/webgl-api'),
                    }),
                    new CopyPlugin({
                        patterns: [
                            { from: "node_modules/@novorender/webgl-api/render.js", to: config.mode === 'development' ? "[name][ext]" : "assets/js/[name][ext]" },
                            { from: "node_modules/@novorender/webgl-api/geometry.js", to: config.mode === 'development' ? "[name][ext]" : "assets/js/[name][ext]" }
                        ],
                    })
                ],
                resolve: {
                    fallback: {
                        stream: require.resolve('stream-browserify'),
                        path: require.resolve('path-browserify'),
                        buffer: require.resolve('buffer/'),
                        util: require.resolve('util/'),
                        url: require.resolve('url/'),
                    },
                    alias: {
                        process: 'process/browser.js',
                    },
                },
                module: {
                    rules: [{ test: /\.snippet$/, use: 'raw-loader' }],
                },
            };
        },
    };
};

module.exports = { webpackPlugin };
