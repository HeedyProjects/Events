import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventsScreen from '../screens/EventsScreen';
import FriendsScreen from '../screens/FriendsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import EventsIcon from '../../assets/SVG/eventsTabIcon.svg';
import FriendsIcon from '../../assets/SVG/friendsTabIcon.svg';
import ProfileIcon from '../../assets/SVG/profileTabIcon.svg';
import colors from '../utils/colors';
const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let tabColor = focused
            ? colors.MAIN_THEME_PURPLE
            : colors.MAIN_THEME_GRAY;

          if (route.name === 'События') {
            // You can return any component that you like here!
            return <EventsIcon fill={tabColor} />;
          } else if (route.name === 'Друзья') {
            return <FriendsIcon fill={tabColor} />;
          } else if (route.name === 'Профиль') {
            return <ProfileIcon fill={tabColor} />;
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.MAIN_THEME_PURPLE,
        inactiveTintColor: colors.MAIN_THEME_GRAY,
      }}>
      <Tab.Screen name="События" component={EventsScreen} />
      <Tab.Screen name="Друзья" component={FriendsScreen} />
      <Tab.Screen name="Профиль" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
