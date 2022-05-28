import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function Events() {
  return (
    <View>
      <Text>There will be Events Screen</Text>
    </View>
  );
}

function Friends() {
  return (
    <View>
      <Text>There will be Friends Screen</Text>
    </View>
  );
}

function Profile() {
  return (
    <View>
      <Text>There will be Profile Screen</Text>
    </View>
  );
}

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Events" component={Events} />
        <Tab.Screen name="Friends" component={Friends} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    // flexDirection: 'row',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  ttl: {
    marginTop: 52,
    fontSize: 24,
    color: '#000',
  },
});

export default App;
