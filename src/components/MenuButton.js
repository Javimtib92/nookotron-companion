import * as React from 'react';
import styled from 'styled-components';
import {
  View,
  TouchableNativeFeedback,
  TouchableHighlight,
  Platform,
  StyleSheet,
} from 'react-native';
import {su} from '~/utils';
import {Icon} from '~/components';

const MenuButton = styled.View.attrs({
  hitSlop: {top: 10, bottom: 10, left: 5, right: 5},
  ...Platform.select({
    android: {
      background:
        Platform.Version >= 21
          ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', true)
          : TouchableNativeFeedback.SelectableBackground(),
      style: {padding: su(8)},
      useForeground: true,
    },
    ios: {
      activeOpacity: 0.6,
      underlayColor: '#DDDDDD',
    },
  }),
})`
  width: ${su(18)};
  height: ${su(18)};
  border-radius: ${su(9)};
  align-items: center;
  justify-content: center;
  margin-left: ${p => (p.spacing ? su(p.spacing) : 0)};
`;

const styles = StyleSheet.create({
  paddingWrapper: {
    padding: 8,
  },
});

export default ({onPress}) => (
  <MenuButton
    as={Platform.select({
      android: TouchableNativeFeedback,
      ios: TouchableHighlight,
    })}
    onPress={onPress}>
    <View style={styles.paddingWrapper}>
      <Icon name="fal/bars" size="18" color="black" />
    </View>
  </MenuButton>
);
