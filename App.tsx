import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

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

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView >
      <View style={styles.backgroundStyle}>
       <Text style={styles.ttl}>Hello EventsApp</Text>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flexDirection: 'row',
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
