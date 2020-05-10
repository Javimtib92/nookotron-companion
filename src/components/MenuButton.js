import * as React from 'react';
import styled from 'styled-components';
import {su} from '~/utils';
import Icon from '~components/Icon';
import TouchableHighlight from '~components/TouchableHighlight';

const MenuButton = styled(TouchableHighlight).attrs({useForeground: true})`
  width: ${su(18)};
  height: ${su(18)};
  border-radius: ${su(9)};
  align-items: center;
  justify-content: center;
  margin-left: ${p => su(p.spacing ? p.spacing : 0)};
`;

const MenuIcon = styled(Icon).attrs({
  name: 'fal/bars',
  size: 18,
  color: 'black',
})`
  padding: ${su(8)};
`;

export default ({onPress}) => (
  <MenuButton onPress={onPress}>
    <MenuIcon />
  </MenuButton>
);
