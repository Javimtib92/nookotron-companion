import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Villagers from '~/screens/Villagers';
import VillagerDetails from '~/screens/VillagerDetails';
import {MenuButton} from '~components';

const Stack = createStackNavigator();

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
        options={({route}) => ({
          headerTitle: route.params.villager.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ResidentsNavigator;
