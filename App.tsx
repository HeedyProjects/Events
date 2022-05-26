import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
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
    fontFamily: 'SFProDisplay-Bold',
  },
});

export default App;
