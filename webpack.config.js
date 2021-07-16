module.exports = {
  // eslint-disable-next-line no-undef
  entry: __dirname + '/heartbeatmanager/frontend/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env']
          }
        }
      }
    ]
  },
  output: {
    filename: 'main.js',
    // eslint-disable-next-line no-undef
    path: __dirname + '/heartbeatmanager/frontend/static/frontend'
  }
};
