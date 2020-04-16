const toRGB = hex => {
  if (!hex) {
    return 'transparent';
  }
  const c = parseInt(hex.replace('#', ''), 16);
  return `${(c >> 16) & 255},${(c >> 8) & 255},${c & 255}`; // eslint-disable-line no-bitwise
};

const Colors = {
  primary: '#96F5F5',
  accent: '#ccedd1',

  transparent: 'transparent',

  white: '#ffffff',
  black: '#000000',

  blue: '#0A91FE',
  green: '#37B4A9',
  orange: '#F6AB2F',
  red: '#E6492D',

  grayWhite: '#F8F9FC',
  grayLighter: '#D8DCE6',
  grayLight: '#A2A4B1',
  gray: '#74768A',
  grayDark: '#5D5F77',
  grayBlack: '#171A3D',

  rgba: (color, opacity) => `rgba(${toRGB(color)}, ${opacity})`,
};

export default Colors;
