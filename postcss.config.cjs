const config = {
  plugins: [
    require('postcss-import'),
    require('postcss-strip-inline-comments'),
    require('postcss-nested'),
    require('postcss-preset-env'),
    require('autoprefixer'),
    require('postcss-extend-rule'),
    process.env.NODE_ENV === 'development' && require('cssnano')({
      preset: 'default',
    })
  ],
};

module.exports = config;
