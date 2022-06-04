import React, {useEffect} from 'react';
import RootTabNavigator from './src/navigation/RootTabNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <RootTabNavigator />
    </Provider>
  );
};

export default App;
