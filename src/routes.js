import * as React from 'react';
import {Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {MenuButton, Icon, Flex} from '~/components';
import Intro from '~/screens/Intro';
import Main from '~/screens/Main';
import Residents from '~/screens/Residents';

import {su} from '~/utils';
import {Colors} from '~/vars';

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

const CustomDrawerContent = props => {
  console.log(props);
  return (
    <React.Fragment>
      <Flex align="center" style={{padding: 16}}>
        <Image
          source={require('~assets/images/logo-acnh.png')}
          style={{height: su(100), width: su(200)}}
          resizeMode="contain"
        />
      </Flex>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </React.Fragment>
  );
};

const DrawerNavigator = () => {
  console.log(Colors);
  return (
    <Drawer.Navigator
      initialRouteName="MainNavigator"
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerContentOptions={{
        activeBackgroundColor: Colors.accent,
      }}>
      <Drawer.Screen
        name="MainNavigator"
        component={MainNavigator}
        options={{
          title: 'Lista de tareas',
          drawerIcon: ({}) => (
            <Icon name="fas/clipboardCheck" size="18" color="purple" />
          ),
        }}
      />
      <Drawer.Screen
        name="ResidentsNavigator"
        component={ResidentsNavigator}
        options={{
          title: 'Residentes',
          drawerIcon: ({}) => <Icon name="fas/paw" size="18" color="green" />,
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
