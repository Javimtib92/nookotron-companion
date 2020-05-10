import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '~/vars';

const Divider = ({style, theme, ...rest}) => (
  <View
    style={StyleSheet.flatten([styles.container(theme), style])}
    {...rest}
  />
);

const styles = {
  container: theme => ({
    backgroundColor: Colors.divider,
    height: StyleSheet.hairlineWidth,
  }),
};

export default Divider;
