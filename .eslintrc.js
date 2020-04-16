module.exports = {
  extends: '@react-native-community',
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.js', '.android.js', '.ios.js', '.web.js', '.native.js'],
        map: [['~', './src']],
      },
    },
  },
};
