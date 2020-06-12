module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'babel-plugin-root-import',
        {
          "paths": [
            {
              rootPathPrefix: 'App',
              rootPathSuffix: './src'
            },
            {
              rootPathPrefix: 'Assets',
              rootPathSuffix: './assets'
            },
          ]
        }
      ]
    ]
  };
};
