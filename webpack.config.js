// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js'
  },
  // El resolve permite manejar las extensiones con las que trabajaremos
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      // Js and JSX loader
      {
        // Esta configuracion des test cargara el loader con cualquier extension
        test: /\.(js|jsx)$/,
        // Es importante ignorar la carpeta node_modules
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // permite compatibilidad
              '@babel/preset-react' // Permite trabajar con react
            ]
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  devServer: {
    compress: true,
    port: 3005,
    historyApiFallback: true
  }
}
