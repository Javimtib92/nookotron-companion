import React from 'react';
import styled from 'styled-components';

import {Image, View} from 'react-native';
import {Text, Blockquote, Flex} from '~components';
import {su} from '~/utils';

const Container = styled.View``;
const ImageHeader = styled.View`
  height: ${su(220)};
  padding-bottom: 16px;
  border-bottom-width: ${su(1)};
  border-bottom-color: #efefef;
`;
const Body = styled.View`
  background-color: white;
  padding: ${su(20)};
`;

const VillagerDetails = ({route}) => {
  const villager = route.params.villager;

  return (
    <Container>
      <ImageHeader
        style={{
          backgroundColor: `rgb(${villager.background_color.join(',')})`,
        }}>
        <Image
          source={villager.full}
          resizeMode="contain"
          style={{flex: 1, width: undefined, height: undefined}}
        />
      </ImageHeader>

      <Body>
        <Flex justify="between">
          <View>
            <Text size={24}>{villager.name}</Text>
            <Text size={16}>{villager.birthday}</Text>
          </View>
          <View>
            <Text size={16}>{villager.personality}</Text>
            <Image
              style={{width: 24, height: 24}}
              source={{
                uri:
                  'https://cdn3.iconfinder.com/data/icons/budicon-animal-outline/25/mouse-512.png',
              }}
            />
          </View>
        </Flex>
      </Body>
      {villager.initial_phrase && villager.initial_phrase !== '' ? (
        <Blockquote
          borderColor={`rgb(${villager.villager_dominant_color.join(',')})`}
          quote={villager.initial_phrase}
        />
      ) : null}

      <Body style={{height: '100%'}} />
    </Container>
  );
};

export default VillagerDetails;
