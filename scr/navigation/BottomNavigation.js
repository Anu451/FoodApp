import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import DinningScreen from '../screens/DinningScreen';
import MoneyScreen from '../screens/MoneyScreen';
import ProfileScreen from '../screens/ProfileScreen';
const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Dinning"
        component={DinningScreen}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Money"
        component={MoneyScreen}
        options={{headerShown: false}}></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default Tabs;
