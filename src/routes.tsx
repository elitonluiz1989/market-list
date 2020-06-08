import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Products from './pages/Products';
import Product from './pages/Product';

type RoutesType = {
  Products: {},
  Product: {
    productId: number
  }
}

const AppStack = createStackNavigator<RoutesType>();

export default function Routes() {
  return (
    <NavigationContainer >
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Products" component={Products} />
        <AppStack.Screen name="Product" component={Product} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}