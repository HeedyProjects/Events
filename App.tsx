import React, {useEffect} from 'react';
import RootTabNavigator from './src/navigation/RootTabNavigator';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/store';
import ScreenStackNavigator from './src/navigation/ScreenStackNavigator';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScreenStackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
