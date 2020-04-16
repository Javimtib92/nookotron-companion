import styled from 'styled-components/native';
import {su} from '~/utils';

const Spacing = styled.View`
  width: ${p => su(p.x)};
  height: ${p => su(p.y)};
  flex-grow: ${p => (p.grow ? 1 : 0)};
`;

Spacing.defaultProps = {
  x: 0,
  y: 0,
  grow: false,
};

export default Spacing;
