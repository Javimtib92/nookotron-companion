import styled from 'styled-components';
import {Colors} from '~/vars';
import {su} from '~/utils';

const Text = styled.Text.attrs({
  allowFontScaling: false,
})`
  font-size: ${p => su(p.size)};
  color: ${p => Colors[p.color]};
  line-height: ${p => su(p.size * p.lineHeight)};
  flex: ${p => (p.ellipsis ? '1 1 auto' : '0 0 auto')};
  text-align: ${p => p.align};
  font-style: ${p => p.fontStyle};
`;

Text.defaultProps = {
  size: 16,
  weight: 'regular',
  color: 'black',
  align: 'left',
  lineHeight: 1.2,
  fontStyle: 'normal',
};

export const Br = styled.Text.attrs({children: '\n'})``;

export default Text;
