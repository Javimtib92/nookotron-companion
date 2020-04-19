import React from 'react';

import {Text, StyleSheet, View} from 'react-native';

import IslandVillagers from './components/IslandVillagersList';

const Residents = ({navigation}) => (
  <View>
    <IslandVillagers />
  </View>
);

export default Residents;
