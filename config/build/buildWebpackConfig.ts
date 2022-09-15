import {BuildOptions} from "./types/config";
import webpack from "webpack";
import {buildLoaders} from "./buildLoaders";
import {buildResolvers} from "./buildResolvers";
import {buildPlugins} from "./buildPlugins";
import {buildDevServer} from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions):webpack.Configuration {
    const {paths, mode, isDev} = options;
    return {
        mode: mode,
        entry: paths.entries,
        module: {
            rules: buildLoaders(),
        },
        resolve: buildResolvers(),
        output: {
            filename: "[name].[contenthash].js",
            path: paths.build,
            clean: true,
        },
        plugins: buildPlugins(options),
        devtool: isDev?'inline-source-map':undefined,
        devServer: isDev?buildDevServer(options): undefined,
    };
}