import 'react-native-gesture-handler';
import '~/config/ReactotronConfig';
import * as React from 'react';
import {ThemeProvider} from 'react-native-elements';
import Navigation from '~/routes';

console.disableYellowBox = true;

const theme = {
  Button: {
    raised: true,
  },
};

const App = () => (
  <ThemeProvider theme={theme}>
    <Navigation />
  </ThemeProvider>
);

export default App;
