const webpack = require('webpack'); 
module.exports = function override(config) { 
		const fallback = config.resolve.fallback || {}; 
		Object.assign(fallback, { 
    	"crypto": require.resolve("crypto-browserify"), 
      "stream": require.resolve("stream-browserify"), 
      "zlib": require.resolve("browserify-zlib"),
      "util": require.resolve("util")
      }) 
   config.resolve.fallback = fallback; 
   config.plugins = (config.plugins || []).concat([ 
   	new webpack.ProvidePlugin({ 
      process: 'process/browser', 
      Buffer: ['buffer', 'Buffer'] 
    }),
   ]) 
   return config; }