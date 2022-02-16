import "react-native-gesture-handler";
import React from "react";
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import Cart from "./screens/Cart";

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <StatusBar barStyle="dark-content" backgroundColor="white"/>
     <Stack.Navigator>
       <Stack.Screen name="home" component={HomeScreen}/>
       <Stack.Screen name="product" component={ProductScreen}/>
       <Stack.Screen name="cart" component={Cart}/>
     </Stack.Navigator>
   </NavigationContainer>
  );
}

