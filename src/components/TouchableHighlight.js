import * as React from 'react';
import {Platform, TouchableNativeFeedback} from 'react-native';
import styled from 'styled-components';
import {su} from '~/utils';

const TouchableHighlightWrapper = styled.View.attrs(p => ({
  hitSlop: {top: 10, bottom: 10, left: 5, right: 5},
  ...Platform.select({
    android: {
      background:
        Platform.Version >= 21
          ? TouchableNativeFeedback.Ripple('rgba(0,0,0,.2)', p.useForeground)
          : TouchableNativeFeedback.SelectableBackground(),
      style: {padding: p.padding},
      useForeground: p.useForeground,
    },
    ios: {
      activeOpacity: p.activeOpacity,
      underlayColor: '#DDDDDD',
    },
  }),
}))``;

const TouchableHighlight = ({
  useForeground = false,
  activeOpacity = 0.6,
  padding = su(8),
  children,
  ...props
}) => {
  return (
    <TouchableHighlightWrapper
      as={Platform.select({
        android: TouchableNativeFeedback,
        ios: TouchableHighlight,
      })}
      useForeground={useForeground}
      activeOpacity={activeOpacity}
      padding={padding}
      {...props}>
      {children}
    </TouchableHighlightWrapper>
  );
};

export default TouchableHighlight;
