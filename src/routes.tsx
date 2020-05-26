import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './pages/Products';

type RoutesType = {
  Products: {}
}

const AppStack = createStackNavigator<RoutesType>();

export default function Routes() {
  return (
    <NavigationContainer >
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Products" component={Products} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}