import webpack from "webpack";

export default {
    entry: {
        "./dist/index": "./src/index.jsx",
        "./docs/index": "./docs/index.jsx"
    },
    output: {
        path: "./",
        filename: "[name].js",
        library: "react-xmasonry",
        libraryTarget: "umd"
    },
    externals: {
        "react": "React"
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
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