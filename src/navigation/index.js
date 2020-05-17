import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Intro from '~/screens/Intro';
import DrawerNavigator from '~/navigation/DrawerNavigator';

const Stack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Intro"
        component={Intro}
        options={{
          header: () => null,
        }}
      />
      <Stack.Screen
        name="Drawer"
        component={DrawerNavigator}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default Navigation;
