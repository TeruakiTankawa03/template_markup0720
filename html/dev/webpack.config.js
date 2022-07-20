const path = require('path');

module.exports = {
    watch: true,
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../assets/js'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ]
                        }
                    }
                ]
            }
        ]
    }

    // entry: './src/main.ts',
    // output: {
    //     path: path.resolve(__dirname, '../assets/js'),
    //     filename: 'bundle.js'
    // },
    // module: {
    //     rules: [
    //         {
    //             test: /\.ts$/,
    //             use: 'ts-loader'
    //         }
    //     ]
    // },
    // resolve: {
    //     extensions: [
    //         '.ts'
    //     ]
    // }
  
};
