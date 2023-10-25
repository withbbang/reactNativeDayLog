/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RockStack from './screens/RockStack';
import {LogContextProvider} from './contexts/LogContext';

function App() {
  return (
    <NavigationContainer>
      <LogContextProvider>
        <RockStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
