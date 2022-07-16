const TerserPlugin = require("terser-webpack-plugin");
module.exports = {
    experiments: {
        outputModule:true,
    },
    output:{
        library:{
            type:'module'
        }
    },
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}