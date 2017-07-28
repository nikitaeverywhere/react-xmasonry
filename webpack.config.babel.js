import webpack from "webpack";

export default {
    entry: {
        "./dist/index": "./src/index.jsx",
        "./docs/index": "./docs/index.jsx"
    },
    output: {
        path: `${ __dirname }`,
        filename: "[name].js",
        library: "react-xmasonry",
        libraryTarget: "umd"
    },
    externals: {
        "react": {
            root: "React",
            commonjs2: "react",
            commonjs: "react",
            amd: "react",
            umd: "react"
        },
        "react-dom": {
            root: "ReactDOM",
            commonjs2: "react-dom",
            commonjs: "react-dom",
            amd: "react-dom",
            umd: "react-dom"
        }
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: `babel-loader`,
                query: {
                    presets: [`es2015`, `stage-0`, `react`]
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ]
}