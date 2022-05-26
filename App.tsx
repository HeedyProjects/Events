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

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <SafeAreaView>
      <View style={styles.backgroundStyle}>
        <CustomText textType="SFProDisplayBlack" style={styles.ttl}>
          Hello EventsApp
        </CustomText>
        <CustomText textType="SFProDisplayThin" style={styles.ttl}>
          Hello EventsApp
        </CustomText>
     </View>
    </SafeAreaView>
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
