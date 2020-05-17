import * as React from 'react';
import styled from 'styled-components';
import {View} from 'react-native';
import {Text, Blockquote, Flex} from '~components';
import {su} from '~/utils';

const VillagerDetails = ({route}) => {
  const villager = route.params.villager;

  return (
    <Container>
      <HeaderImageContainer>
        <HeaderImage source={villager.full} resizeMode="contain" style={{}} />
      </HeaderImageContainer>

      <Body>
        <Flex justify="between">
          <View>
            <Text size={24}>{villager.name}</Text>
            <Text size={16}>{villager.birthday}</Text>
          </View>
          <View>
            <Text size={16}>{villager.personality}</Text>
            {/* TODO: Add animal type or icon */}
          </View>
        </Flex>
      </Body>
      {villager.initial_phrase && villager.initial_phrase !== '' ? (
        <Blockquote
          borderColor={`rgb(${villager.villager_dominant_color.join(',')})`}
          quote={villager.initial_phrase}
        />
      ) : null}

      <Body fullHeight />
    </Container>
  );
};

const Container = styled.View``;

const HeaderImageContainer = styled.View`
  height: ${su(220)};
  padding-bottom: 16px;
  border-bottom-width: ${su(1)};
  border-bottom-color: #efefef;
`;

const HeaderImage = styled.Image`
  flex: 1;
  width: undefined;
  height: undefined;
`;

const Body = styled.View`
  background-color: white;
  padding: ${su(20)};
  ${p => (p.fullHeight ? 'height: 100%' : '')}
`;

export default VillagerDetails;
