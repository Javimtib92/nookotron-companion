import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import {Spacing, Flex} from '~/components';
import TodoList from './components/TodoList';

const styles = StyleSheet.create({});

const Main = ({navigation}) => (
  <View>
    <TodoList />
  </View>
);

export default Main;
