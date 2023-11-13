import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from './src/screens/LoginScreen'
import HomeScreen from './src/screens/HomeScreen';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const MainTabs = () => (
  <Tab.Navigator screenOptions={{headerShown: false}}>
    <Tab.Screen name="HomeScreen" component={HomeScreen} />
    <Tab.Screen name="SearchScreen" component={SearchScreen} />
  </Tab.Navigator>
);

/* const MainDrawer = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={HomeScreen} />
    <Drawer.Screen name="DrawerScreen1" component={DrawerScreen1} />
  </Drawer.Navigator>
);  */

const MainStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={MainTabs} />
    {/* <Stack.Screen name="Drawer" component={MainDrawer} /> */}
  </Stack.Navigator>
);


const App = () => (
  <NavigationContainer>
    <MainStack />
  </NavigationContainer>
);

export default App;
