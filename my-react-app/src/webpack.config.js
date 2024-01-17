// webpack.config.js
module.exports = {
    // ...other configurations
    module: {
      rules: [
        // ...other rules
        {
          test: /\.html$/,
          use: ['html-loader'],
        },
      ],
    },
  };
  