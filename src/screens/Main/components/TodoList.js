import * as React from 'react';
import styled from 'styled-components';
import {Dimensions, FlatList} from 'react-native';
import {CheckBox, Rating} from 'react-native-elements';
import {Flex, Spacing} from '~components';
import {su} from '~/utils';
import {Colors} from '~/vars';

import TodoListMock from '~/mock/todo-list';

const window = Dimensions.get('window');

const TodoList = () => {
  const [selected, setSelected] = React.useState([]);

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
        keyExtractor={item => item.key}
      />
    </Container>
  );
};

const Container = styled.View`
  background-color: ${Colors.white};
  height: ${su(window.height)}
  padding-vertical: ${su(14)};
`;

const TodoListHeader = ({completed = 0, total = 0}) => {
  return (
    <Flex justify="center">
      <Rating
        readonly
        type="bell"
        fractions={1}
        defaultRating={0}
        startingValue={completed}
        ratingCount={total}
        imageSize={24}
        onFinishRating={() => {}}
      />
    </Flex>
  );
};

const TodoListItem = ({item, onChange}) => {
  const [checked, setChecked] = React.useState(false);

  const toggleChecked = () => {
    const newState = !checked;

    setChecked(newState);
    onChange(newState, item);
  };

  return (
    <CheckBox
      title={item.title}
      checked={checked}
      checkedColor="#b8e3bf"
      onPress={toggleChecked}
    />
  );
};

export default TodoList;
