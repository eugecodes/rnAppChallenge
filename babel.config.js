const alias = { '^@/(.+)': './src/\\1' } // @/folder will be an alias to <root>/src/folder
const extensions = [
  '.android.js',
  '.ios.js',
  '.js',
  '.ts',
  '.tsx',
  '.json',
  '.native',
]

const presets = ['module:metro-react-native-babel-preset']
const plugins = [
  ['module-resolver', { alias, extensions }],
  [
    '@babel/plugin-proposal-decorators',
    {
      legacy: true,
    },
  ],
  ['react-native-reanimated/plugin'],
]

module.exports = { presets, plugins }
