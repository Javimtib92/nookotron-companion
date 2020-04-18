import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {MenuButton} from '~/components';
import Intro from '~/screens/Intro';
import Main from '~/screens/Main';
import Residents from '~/screens/Residents';

import {su} from '~/utils';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeftContainerStyle: {
          paddingHorizontal: su(14),
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

const ResidentsNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={({navigation}) => ({
        headerLeftContainerStyle: {
          paddingHorizontal: su(14),
        },
        headerLeft: () => (
          <MenuButton onPress={() => navigation.openDrawer()} />
        ),
      })}>
      <Stack.Screen
        name="Residents"
        component={Residents}
        options={{
          headerTitle: 'Residentes',
        }}
      />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="MainNavigator">
      <Drawer.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          title: 'Lista de tareas',
        }}
      />
      <Drawer.Screen
        name="ResidentsNavigator"
        component={ResidentsNavigator}
        options={{
          title: 'Residentes',
        }}
      />
    </Drawer.Navigator>
  );
};

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
