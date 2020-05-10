import * as React from 'react';
import styled from 'styled-components';
import {su} from '~/utils';
import Icon from '~components/Icon';
import Flex from '~components/Flex';

const Container = styled.View.attrs(p => ({
  borderColor: p.borderColor,
}))`
  border-left-color: ${p => p.borderColor};
  border-left-width: 10;
  padding: 16px;
`;

const QuoteText = styled.Text`
  font-size: 16px;
  text-align: center;
  margin: 0 auto;
`;

const QuoteLeft = styled(Icon).attrs({
  name: 'fas/quoteLeft',
  size: 14,
  color: '#424242',
})`
  position: relative;
`;

const QuoteRight = styled(Icon).attrs({
  name: 'fas/quoteRight',
  size: 14,
  color: '#424242',
})`
  position: relative;
  right: 0;
`;

export default ({borderColor = '#b8e3bf', quote = ''}) => (
  <Container borderColor={borderColor}>
    <Flex justify="start">
      <QuoteLeft />
    </Flex>

    <QuoteText>{quote}</QuoteText>
    <Flex justify="end">
      <QuoteRight />
    </Flex>
  </Container>
);
