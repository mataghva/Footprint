const path = require("path"); //gives us access to path.resolve
module.exports = {
    entry: "./frontend/entry.jsx", //file that webpack will read to create giant file w/ all of our js in it
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"), //absolute path of the directory that contains the file that is currently executing (.resolve is from the require path)
        filename: 'bundle.js' //what we want the file to be called once we output
    },
    devtool: 'source-map', //helpful for debugging -- if we have an err in code, this will tell what line the err is on
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
    rules: [
        { //we are saying here that for any jsx files we use babel loader
            test: /\.jsx?$/, //a regular expression that tests what kind of files to run through this loader.
            exclude: /(node_modules)/, //ignore these files
            use: {
              loader: 'babel-loader', //the name of the loader we are going to use (babel-loader).
              options: { // options for the loader
                // for webpack 5, this 'query' key should be 'options' key instead
                // for more info: https://webpack.js.org/configuration/module/#ruleoptions--rulequery
                presets: ['@babel/env', '@babel/react'] //tells loader to use @babel/env which transpiles back to es5 and @babel/react which converts jsx code
              }
            },
          }
        ]
    }
}
