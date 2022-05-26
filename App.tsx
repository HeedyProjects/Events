import React from 'react';
import CustomText from './src/components/CustomText';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

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
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

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
