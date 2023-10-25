import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTab from '../MainTab';
import WriteScreen from '../WriteScreen';

const Stack = createNativeStackNavigator();

function RockStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="write" component={WriteScreen} />
    </Stack.Navigator>
  );
}

export default RockStack;