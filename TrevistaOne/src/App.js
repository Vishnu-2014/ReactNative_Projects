/* eslint-disable no-return-assign */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Welcome from './Components/Welcome';
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Home from './Components/Home';

const Stack = createNativeStackNavigator();

const App = () => {
  const [splash, SetSplash] = React.useState(true);

  useEffect(() => {
    setTimeout(() => {
      SetSplash(false);
    }, 2000);
  }, [splash]);

  return (
    <>
      {splash ? (
        <Home />
      ) : (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen name="signUp" component={SignUp} />
            <Stack.Screen name="welcome" component={Welcome} />
            <Stack.Screen name="signIn" component={SignIn} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </>
  );
};

export default App;