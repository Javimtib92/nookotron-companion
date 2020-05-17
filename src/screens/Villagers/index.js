import * as React from 'react';

import {Platform, View} from 'react-native';
import {SearchBar} from 'react-native-elements';
import VillagersList from './components/VillagerList';

const Residents = props => {
  const [search, updateSearch] = React.useState('');
  return (
    <View>
      <SearchBar
        lightTheme
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform={Platform.OS === 'android' ? 'android' : 'ios'}
      />
      <VillagersList {...props} search={search} />
    </View>
  );
};

export default Residents;
