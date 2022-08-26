import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootStack from './screens/RootStack';

/**
 * Todo - add SafeAreaView to the app from react-native-safe-area-context
 */

function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

export default App;
