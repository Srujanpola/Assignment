import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/AppScreens/Home';
import ProductDetial from './src/AppScreens/ProductDetial';
import ProductAddScreen from './src/AppScreens/ProductAddScreen';
const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProductDetialScreen" component={ProductDetial} />
        <Stack.Screen name="ProductAddScreen" component={ProductAddScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
