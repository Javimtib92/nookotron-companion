import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Main from '~/screens/Main';
import {MenuButton} from '~components';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeftContainerStyle: {
          paddingHorizontal: 14,
        },
        headerLeft: () => (
          <MenuButton onPress={() => navigation.openDrawer()} />
        ),
      })}>
      <Stack.Screen
        name="Home"
        component={Main}
        options={{
          headerTitle: 'Lista de tareas',
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
