import * as React from 'react';

import {View} from 'react-native';
import {SearchBar} from '~components';
import VillagersList from './components/VillagerList';

const Residents = props => {
  const [search, updateSearch] = React.useState('');
  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
      />
      <VillagersList {...props} />
    </View>
  );
};

export default Residents;
