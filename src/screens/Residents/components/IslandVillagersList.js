import React from 'react';
import {FlatList, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Flex} from '~/components';
import TodoListMock from '~/mock/villagers';
import {su} from '~/utils';
import {Colors} from '~/vars';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${Colors.white};
`;

const TodoListItem = ({item}) => {
  return (
    <Flex align="start" style={{padding: 20}}>
      <View style={{marginHorizontal: su(8)}}>
        <FastImage style={{width: su(56), height: su(56)}} source={item.head} />
      </View>

      <Flex justify="between" grow>
        <Flex dir="column">
          <Text style={{fontSize: 18}}>{item.name}</Text>
          <Text>{item.personality}</Text>
        </Flex>
        <Flex dir="column" align="end">
          <Text style={{fontSize: 12}}>{item.birthday}</Text>
          <Text>{item.species}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

const TodoList = () => {
  const filtered = TodoListMock.filter(item => item.species === 'Vaca');
  return (
    <Container>
      <FlatList
        data={TodoListMock.sort((a, b) => a.name.localeCompare(b.name))}
        renderItem={({item}) => <TodoListItem item={item} />}
        keyExtractor={item => item.id}
      />
    </Container>
  );
};

export default TodoList;
