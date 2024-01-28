import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '../screens/home/HomeScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Navigator>
      <Screen
        name="main"
        component={HomeScreen}
        options={{headerTransparent: true}}
      />
    </Navigator>
  );
};
