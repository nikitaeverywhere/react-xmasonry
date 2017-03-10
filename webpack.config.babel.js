export default {
    entry: `./src/index.jsx`,
    output: {
        filename: `dist/index.js`
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