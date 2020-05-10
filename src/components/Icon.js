/* eslint-disable no-shadow */
import React from 'react';
import styled from 'styled-components';
import {Svg} from 'react-native-svg';
import {Icons, Colors} from '~/vars';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {su} from '~/utils';

const Icon = ({
  name = null,
  color = 'black',
  size = 20,
  unscalable = false,
  ...props
}) => {
  const scale = unscalable ? v => v : su;

  if (name === null) {
    return null;
  }
  if (['fab/', 'fal/', 'far/', 'fas/'].some(v => name.includes(v))) {
    const type = {fab: 'brands', fal: 'light', far: 'regular', fas: 'solid'}[
      name.split('/')[0]
    ];
    const camel = name
      .split('/')[1]
      .replace(/-([a-z])/g, g => g[1].toUpperCase());
    const icon = Icons.fontawesome[type][camel];

    return (
      <IconWrapper {...props}>
        <FontAwesomeIcon
          icon={icon}
          size={size}
          color={Colors[color] || color}
        />
      </IconWrapper>
    );
  }
  const icon = name
    .split('/')
    .reduce(
      (icon, name) =>
        icon !== null && typeof icon[name] !== 'undefined' ? icon[name] : null,
      Icons,
    );

  if (!icon) {
    return null;
  }

  const {viewBox, content} = icon;
  const v = viewBox.split(' ').map(i => parseFloat(i));
  const dimensions = {
    width: scale(size * (v[2] / v[3])),
    height: scale(size),
  };

  return !content ? null : (
    <Svg
      viewBox={viewBox}
      color={Colors[color] || color}
      {...dimensions}
      {...props}>
      {content}
    </Svg>
  );
};

const IconWrapper = styled.View``;

export default React.memo(Icon);
