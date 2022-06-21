import React, {useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './src/store';
import EntryStackNavigator from './src/navigation/EntryStackNavigator';
import ScreenStackNavigator from './src/navigation/ScreenStackNavigator';
import auth from '@react-native-firebase/auth';
const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  console.log('Our user is ', user);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return <EntryStackNavigator />;
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ScreenStackNavigator />
      </PersistGate>
    </Provider>
  );
};
export default App;
