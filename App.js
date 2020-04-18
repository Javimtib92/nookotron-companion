import 'react-native-gesture-handler';
import React from 'react';

import '~/config/ReactotronConfig';

import {Provider} from 'react-redux';
import store from '~/store';

import Navigation from '~/routes';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default App;
