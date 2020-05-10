import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const defaultWidth = 375;
const precision = 1000;
const scaleLower = true;
const scaleHigher = false;

let scale = width / defaultWidth;
if (!scaleHigher && scale > 1) {
  scale = 1;
}
if (!scaleLower && scale < 1) {
  scale = 1;
}

const su = v =>
  String(Math.round(parseFloat(v, 10) * scale * precision) / precision) + 'px';

export default su;
