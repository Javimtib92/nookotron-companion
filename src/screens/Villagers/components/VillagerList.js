import * as React from 'react';
import {FlatList, View} from 'react-native';
import {Divider} from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import {Text, Flex, TouchableHighlight} from '~components';
import VillagersListMock from '~/mock/villagers';
import {su} from '~/utils';
import {Colors} from '~/vars';
import styled from 'styled-components/native';

const VillagerItemContainer = styled(Flex).attrs({
  align: 'start',
})`
  padding: ${su(20)};
`;

const VillagerAvatarContainer = styled.View`
  margin-left: ${su(8)};
  margin-right: ${su(8)};
`;

const VillagerAvatar = styled(FastImage).attrs(props => ({
  source: props.source,
  resizeMode: FastImage.resizeMode.contain,
}))`
  width: ${su(84)};
  height: ${su(84)};
`;

const VillagerInfo = React.memo(
  ({
    name = 'Unknown',
    personality = 'Unknown',
    birthday = 'Unknown',
    species = 'Unknown',
  }) => {
    return (
      <Flex justify="between" grow>
        <Flex dir="column">
          <Text size={18}>{name}</Text>
          <Text>{personality}</Text>
        </Flex>
        <Flex dir="column" align="end">
          <Text size={12}>{birthday}</Text>
          <Text>{species}</Text>
        </Flex>
      </Flex>
    );
  },
);

const VillagerItem = ({villager, navigation}) => {
  return (
    <View>
      <TouchableHighlight
        onPress={() => navigation.navigate('Details', {villager})}>
        <VillagerItemContainer>
          <VillagerAvatarContainer>
            <VillagerAvatar source={villager.thumb} />
          </VillagerAvatarContainer>
          <VillagerInfo
            name={villager.name}
            personality={villager.personality}
            birthday={villager.birthday}
            species={villager.species}
          />
        </VillagerItemContainer>
      </TouchableHighlight>
    </View>
  );
};

const Container = styled.View`
  background-color: ${Colors.white};
`;

const VillagersList = ({search, ...props}) => {
  const [villagers, setVillagers] = React.useState([]);

  React.useEffect(() => {
    setVillagers(
      VillagersListMock.sort((a, b) => a.name.localeCompare(b.name)),
    );
  }, []);

  React.useEffect(() => {
    setVillagers(
      VillagersListMock.sort((a, b) => a.name.localeCompare(b.name)).filter(
        villager =>
          villager.name.toLowerCase().startsWith(search.toLowerCase()) ||
          villager.species.toLowerCase().startsWith(search.toLowerCase()) ||
          villager.personality.toLowerCase().startsWith(search.toLowerCase()),
      ),
    );
  }, [search]);

  return (
    <Container>
      <FlatList
        data={villagers}
        renderItem={({item}) => <VillagerItem villager={item} {...props} />}
        keyExtractor={villager => villager.id}
        ItemSeparatorComponent={Divider}
      />
    </Container>
  );
};

export default VillagersList;
