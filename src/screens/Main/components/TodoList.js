import React, {useState, useEffect} from 'react';
import {Dimensions, FlatList, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Flex, Spacing} from '~/components';
import TodoListMock from '~/mock/todo-list';
import {su} from '~/utils';
import {Colors} from '~/vars';
import styled from 'styled-components/native';

const Container = styled.View`
  background-color: ${Colors.white};
  height: ${Dimensions.get('window').height}
  padding-vertical: ${su(14)};
`;

const TodoListItemContainer = styled.TouchableHighlight.attrs({
  activeOpacity: 0.6,
  underlayColor: '#EEE',
})`
  padding-top: ${su(6)};
  padding-bottom: ${su(6)};
  background-color: ${p => (p.active ? '#dbffe1' : Colors.white)};
  border-bottom-width: 1px;
  border-color: ${p => (p.active ? '#b8e3bf' : '#eee')};
`;

const ProgressTrackItem = styled.View`
  background-color: ${p => (p.completed ? p.completedColor : '#e1e1e1')};
  width: ${su(14)};
  height: ${su(14)};
  border-radius: ${su(7)};
  margin-horizontal: ${su(5)};
`;

const TodoListItem = ({item, onChange}) => {
  const [checked, setChecked] = useState(false);

  const toggleChecked = () => {
    const newState = !checked;

    setChecked(newState);
    onChange(newState, item);
  };

  return (
    <TodoListItemContainer onPress={toggleChecked} active={checked}>
      <Flex align="center">
        <CheckBox title="Click Here" value={checked} onChange={toggleChecked} />
        <Text>{item.title}</Text>
      </Flex>
    </TodoListItemContainer>
  );
};

const TodoListHeader = ({completed = 0, total = 0}) => {
  const [completedColor, setCompletedColor] = useState(Colors.primary);

  useEffect(() => {
    let color = Colors.primary;

    if (completed === total) {
      color = Colors.accent;
    }

    setCompletedColor(color);
  }, [completed, total]);

  return (
    <Flex justify="center">
      {[...Array(total)].map((_, index) => (
        <ProgressTrackItem
          completed={index < completed}
          completedColor={completedColor}
        />
      ))}
    </Flex>
  );
};

const TodoList = () => {
  const [selected, setSelected] = useState([]);

  const onItemChange = (checked, item) => {
    if (checked) {
      setSelected([...selected, item]);
    } else {
      setSelected(selected.filter(todo => todo.key !== item.key));
    }
  };

  return (
    <Container>
      <TodoListHeader total={TodoListMock.length} completed={selected.length} />
      <Spacing y="14" />
      <FlatList
        data={TodoListMock}
        renderItem={({item}) => (
          <TodoListItem item={item} onChange={onItemChange} />
        )}
      />
    </Container>
  );
};

export default TodoList;
