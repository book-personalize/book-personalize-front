const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const templates = ['add', 'index', 'book', 'edit', 'login', 'profile'];
const htmlPlugins = templates.map(template =>
  new HtmlWebpackPlugin({
    template: `./src/templates/${template}.html`,
    filename: `${template}.html`,
    chunks: [template],
  }));

module.exports = {
  entry: templates.reduce(
    (acc, cur) => {
      acc[cur] = `./src/ts/${cur}.ts`;
      return acc;
    },
    { 'css/style': './src/css/style.css' },
  ),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    ...htmlPlugins,
  ],
  devServer: {
    port: 8080,
    overlay: true,
    historyApiFallback: {
      rewrites: templates.map(template => ({
        from: `/${template}`,
        to: `/${template}.html`,
      })),
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
