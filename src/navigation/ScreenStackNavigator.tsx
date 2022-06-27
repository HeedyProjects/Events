import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddNewEventScreen from '../screens/AddNewEventScreen';
import RootTabNavigator from './RootTabNavigator';
import EventInvitation from '../screens/EventInvitation';
import NewEvents from '../screens/NewEvents';
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
        <Stack.Screen name="EventInvitation" component={EventInvitation} />
        <Stack.Screen name="NewEvents" component={NewEvents} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenStackNavigator;
