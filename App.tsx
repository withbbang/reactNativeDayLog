/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RockStack from './screens/RockStack';
import LogContext from './contexts/LogContext';

function App() {
  return (
    <NavigationContainer>
      <LogContext.Provider value="안녕하세용용">
        <RockStack />
      </LogContext.Provider>
    </NavigationContainer>
  );
}

export default App;
