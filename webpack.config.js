const path = require("path");
const webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const ObfuscatorPlugin = require("webpack-obfuscator");

const rootDir = path.resolve(__dirname, ".");

module.exports = (env, argv) => {
    const isProd = argv.mode === "production";
    return {
        mode: isProd ? "production" : "development",
        entry: "./src/js/index.ts",
        output: {
            path: path.resolve(__dirname, "./dist"),
            publicPath: "/dist/",
            filename: "[name].bundle.js"
        },
        optimization: {
            splitChunks: {
                chunks: "all",
                automaticNameDelimiter: "~",
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendors",
                        chunks: "all",
                        minSize: 0
                    }
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.vue$/,
                    loader: "vue-loader",
                    options: {
                        loaders: {
                            "scss": "vue-style-loader!css-loader!sass-loader",
                            "sass": "vue-style-loader!css-loader!sass-loader?indentedSyntax",
                        }
                    }
                },
                {
                    test: /\.tsx?$/,
                    loader: "ts-loader",
                    exclude: /node_modules/,
                    options: {
                        appendTsSuffixTo: [/\.vue$/],
                    }
                },
                {
                    test: /\.(png|jpg|gif|svg)$/,
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]?[hash]"
                    }
                },
                {
                    test: /\.css$/,
                    use: [
                        "vue-style-loader",
                        "css-loader"
                    ]
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        'style-loader',
                        'css-loader',
                        'sass-loader',
                    ],
                },
            ]
        },
        resolve: {
            extensions: [".ts", ".js", ".vue", ".json"],
            alias: {
                "vue$": "vue/dist/vue.esm.js",
                "@": path.resolve(rootDir, "src"),
                "@res": path.resolve(rootDir, "resources"),
                "@vue": path.resolve(rootDir, "src/js/components")
            }
        },
        devServer: {
            open: true,
            historyApiFallback: true,
            noInfo: true,
            port: 9000,
            host: "0.0.0.0",
            disableHostCheck: true,
        },
        performance: {
            hints: false
        },
        plugins: [
            new VueLoaderPlugin(),
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }),
            // https://github.com/javascript-obfuscator/javascript-obfuscator#high-obfuscation-low-performance
            isProd && new ObfuscatorPlugin({
                compact: true,
                controlFlowFlattening: true,
                controlFlowFlatteningThreshold: 1,
                deadCodeInjection: true,
                deadCodeInjectionThreshold: 1,
                debugProtection: true,
                debugProtectionInterval: true,
                disableConsoleOutput: true,
                identifierNamesGenerator: "hexadecimal",
                log: false,
                numbersToExpressions: true,
                renameGlobals: false,
                rotateStringArray: true,
                selfDefending: true,
                shuffleStringArray: true,
                simplify: true,
                splitStrings: true,
                splitStringsChunkLength: 5,
                stringArray: true,
                stringArrayEncoding: ["rc4"],
                stringArrayIndexShift: true,
                stringArrayWrappersCount: 5,
                stringArrayWrappersChainedCalls: true,
                stringArrayWrappersParametersMaxCount: 5,
                stringArrayWrappersType: "function",
                stringArrayThreshold: 1,
                transformObjectKeys: true,
                unicodeEscapeSequence: false
            }, ["vendors.bundle.js"]),
        ].filter(n => n)
    }
};
