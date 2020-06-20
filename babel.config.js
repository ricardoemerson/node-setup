module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@controllers': './src/controllers',
        '@interfaces': './src/interfaces',
        '@models': './src/models',
        '@repositories': './src/repositories',
        '@services': './src/services',
        '@shared': './src/shared',
        '@views': './src/views'
      },
    }],
  ],
  ignore: [
    '**/*.spec.ts',
  ],
};
