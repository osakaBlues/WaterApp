import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MainTab from './MainTab';
import WaterCardDetailsScreen from './WaterCardDetailsScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="WaterCardDetailsScreen"
        component={WaterCardDetailsScreen}
      />
    </Stack.Navigator>
  );
}

export default RootStack;
