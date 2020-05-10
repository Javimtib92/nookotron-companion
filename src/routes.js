import * as React from 'react';
import styled from 'styled-components';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {MenuButton, Icon, Flex} from '~components';
import Intro from '~/screens/Intro';
import Main from '~/screens/Main';
import Villagers from '~/screens/Villagers';
import VillagerDetails from '~/screens/VillagerDetails';

import {su} from '~/utils';
import {Colors} from '~/vars';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

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

const ResidentsNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Residents"
        component={Villagers}
        options={({navigation}) => ({
          headerTitle: 'Vecinos',
          headerLeftContainerStyle: {
            paddingHorizontal: 14,
          },
          headerLeft: () => (
            <MenuButton onPress={() => navigation.openDrawer()} />
          ),
        })}
      />
      <Stack.Screen
        name="Details"
        component={VillagerDetails}
        options={{
          headerTitle: 'Details',
        }}
      />
    </Stack.Navigator>
  );
};

const LogoContainer = styled(Flex).attrs({
  align: 'center',
})`
  padding: ${su(16)};
`;

const ACNHLogo = styled.Image.attrs({
  source: require('~assets/images/logo-acnh.png'),
  resizeMode: 'contain',
})`
  height: ${su(100)};
  width: ${su(200)};
`;

const CustomDrawerContent = props => {
  return (
    <React.Fragment>
      <LogoContainer>
        <ACNHLogo />
      </LogoContainer>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </React.Fragment>
  );
};

const DrawerNavigator = () => {
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
            <Icon name="fas/clipboardCheck" size={18} color="purple" />
          ),
        }}
      />
      <Drawer.Screen
        name="ResidentsNavigator"
        component={ResidentsNavigator}
        options={{
          title: 'Vecinos',
          drawerIcon: ({}) => <Icon name="fas/paw" size={18} color="green" />,
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
