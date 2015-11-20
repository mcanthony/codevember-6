module.exports = {
  entry: './app/components/Main.jsx',
  output: {
    filename: 'dist/app-compiled.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
