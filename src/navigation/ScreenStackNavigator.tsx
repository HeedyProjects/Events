import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNewEventScreen from '../screens/AddNewEventScreen';
import RootTabNavigator from './RootTabNavigator';
// import EntryStackNavigator from './EntryStackNavigator';
const Stack = createNativeStackNavigator();

function ScreenStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen
          name="EntryStackNavigator"
          component={EntryStackNavigator}
        /> */}
        <Stack.Screen name="RootTabNavigator" component={RootTabNavigator} />

        <Stack.Screen name="AddNewEventScreen" component={AddNewEventScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenStackNavigator;
