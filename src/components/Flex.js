import styled from 'styled-components/native';

const getFrom = (obj, val, def) => obj[val] || obj[def];

const justify = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
};

const align = {
  start: 'flex-start',
  center: 'center',
  end: 'flex-end',
};

const grow = `
  flex: 1 1 0;
  min-width: 0;
  min-height: 0;
`;

const Flex = styled.View`
  flex-flow: ${p => p.dir || 'row'} ${p => p.wrap || 'nowrap'};
  align-items: ${p => getFrom(align, p.align, 'start')};
  justify-content: ${p => getFrom(justify, p.justify, 'start')};
  ${p => (p.grow ? grow : '')};
`;

export default Flex;
