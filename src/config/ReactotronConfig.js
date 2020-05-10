import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import {AsyncStorage} from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';
import {reactotronRedux as reduxPlugin} from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';
// in the import section:

console.disableYellowBox = true;

Reactotron.setAsyncStorageHandler(AsyncStorage);
Reactotron.configure({
  name: 'Nookotron',
  createSocket: path => new ReactotronFlipper(path),
});

Reactotron.useReactNative({
  asyncStorage: {ignore: ['secret']},
});

Reactotron.use(reduxPlugin());
Reactotron.use(sagaPlugin());

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

Reactotron.onCustomCommand('test', () =>
  console.tron.log('This is an example'),
);

console.tron = Reactotron;
