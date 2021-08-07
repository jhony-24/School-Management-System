const path = require("path");
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function(env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.resolve.alias = {
    '@components':path.resolve(__dirname, 'src/components'),
    '@assets':path.resolve(__dirname, 'src/assets'),
    '@config':path.resolve(__dirname, 'src/config'),
    '@atoms': path.resolve(__dirname, 'src/components/atoms'),
    '@molecules': path.resolve(__dirname, 'src/components/molecules'),
    '@organisms': path.resolve(__dirname, 'src/components/organisms'),
    '@webscreen': path.resolve(__dirname, 'src/screens/web'),
    '@nativescreen': path.resolve(__dirname, 'src/screens/native'),
    '@services': path.resolve(__dirname, 'src/core/services'),
    '@utils': path.resolve(__dirname, 'src/core/utils'),
  };

  return config;
};