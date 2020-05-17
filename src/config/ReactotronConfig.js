import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
import {AsyncStorage} from '@react-native-community/async-storage';
import Reactotron from 'reactotron-react-native';

console.disableYellowBox = true;

Reactotron.setAsyncStorageHandler(AsyncStorage);
Reactotron.configure({
  name: 'Nookotron',
  createSocket: path => new ReactotronFlipper(path),
});

Reactotron.useReactNative({
  asyncStorage: {ignore: ['secret']},
});

if (__DEV__) {
  Reactotron.connect();
  Reactotron.clear();
}

console.tron = Reactotron;
