import * as React from 'react';
import styled from 'styled-components';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import {su} from '~/utils';
import {Colors} from '~/vars';

import {Icon, Flex} from '~components';

import MainNavigator from '~/navigation/MainNavigator';
import ResidentsNavigator from '~/navigation/ResidentsNavigator';

const Drawer = createDrawerNavigator();
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

export default DrawerNavigator;
