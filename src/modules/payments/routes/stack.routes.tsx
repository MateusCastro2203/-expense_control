import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {PaymentScreen} from '../screens/payments/PaymentScreen';

const {Navigator, Screen} = createNativeStackNavigator();

export const SpentStack = () => {
  return (
    <Navigator>
      <Screen
        name="main"
        component={PaymentScreen}
        options={{headerShown: false}}
      />
    </Navigator>
  );
};
