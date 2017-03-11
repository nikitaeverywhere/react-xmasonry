export default {
    entry: {
        "./dist/index": "./src/index.jsx",
        "./docs/index": "./docs/index.jsx"
    },
    output: {
        path: "./",
        filename: "[name].js"
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
    }
}