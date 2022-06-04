import React, {useEffect} from 'react';
import RootTabNavigator from './src/navigation/RootTabNavigator';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <RootTabNavigator />;
};

export default App;
