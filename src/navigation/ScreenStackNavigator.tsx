import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNewEventScreen from '../screens/AddNewEventScreen/AddNewEventScreen';
import RootTabNavigator from './RootTabNavigator';

const Stack = createNativeStackNavigator();

function ScreenStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="RootTabNavigator" component={RootTabNavigator} />
        <Stack.Screen name="AddNewEventScreen" component={AddNewEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenStackNavigator;
