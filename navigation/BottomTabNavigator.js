import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

// Import styling and components
import TabBarIcon from '../components/TabBarIcon';
import Colours from "../constants/Colours";
import Styles from "../styles/MainStyle";

// Import navigators & screens
import HomeScreen from '../screens/HomeScreen';
import HelpScreen from '../screens/HelpScreen';


const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colours.tabLabelSelected,
        tabBarInactiveTintColor: Colours.tabLabel,
        tabBarStyle: Styles.navBar,
        tabBarLabelStyle: Styles.navBarLabel,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-home" />
        }}
      />
      <BottomTab.Screen
        name="View Staff"
        component={HelpScreen}
        options={{
          title: 'View Staff',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-people" />,
        }}
      />
      <BottomTab.Screen
        name="Add staff"
        component={HelpScreen}
        options={{
          title: 'Add staff',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-add" />,
        }}
      />
      <BottomTab.Screen
        name="Settings"
        component={HelpScreen}
        options={{
          title: 'Settings',
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-settings" />,
        }}
      />
    </BottomTab.Navigator>
  );
}