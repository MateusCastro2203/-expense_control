import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ExpenseScreen} from '../screens/expense/ExpenseScreen';
import {SafeAreaView} from 'react-native';

const {Navigator, Screen} = createNativeStackNavigator();

export const ExpenseStack = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigator>
        <Screen
          name="main"
          component={ExpenseScreen}
          options={{headerShown: false}}
        />
      </Navigator>
    </SafeAreaView>
  );
};
