import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './src/screens/Home';
import Perfil from './src/screens/Perfil';

const Drawer = createDrawerNavigator();

export default function myDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Perfil" component={Perfil} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
