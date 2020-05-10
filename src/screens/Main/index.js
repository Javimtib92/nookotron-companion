import React from 'react';

import {View} from 'react-native';

import TodoList from './components/TodoList';

const Main = ({navigation}) => (
  <View>
    <TodoList />
  </View>
);

export default Main;
