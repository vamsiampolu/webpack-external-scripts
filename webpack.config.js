const webpack = require('webpack');
module.exports = {
  entry:'./index.js',
  output:{
    path:'./',
    filename:'bundle.js',
  },
  devServer:{
    contentBase:'./',
    port:3000,
    inline:true,
  },
  module:{
    loaders:[
       {
         test:/\.js$/,
	 loader:'babel',
       },
       {
         test:/\.css$/,
	 loader:['style','css'],
       },
    ]
  },
  plugins:[
    new webpack.ProvidePlugin({
       L:'leaflet' 
    })
  ]
}
