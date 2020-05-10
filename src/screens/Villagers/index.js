import React from 'react';

import {View} from 'react-native';

import VillagersList from './components/VillagerList';

const Residents = props => (
  <View>
    <VillagersList {...props} />
  </View>
);

export default Residents;
