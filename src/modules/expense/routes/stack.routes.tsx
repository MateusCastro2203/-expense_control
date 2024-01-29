import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {ExpenseScreen} from '../screens/expense/ExpenseScreen';
import {SafeAreaView} from 'react-native';
import {EntriesScreen} from '../screens/entries/EntriesScreen';
import {HeaderButton} from '../../../components/Header/HeaderButton';

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
        <Screen
          name="entries"
          component={EntriesScreen}
          options={{
            headerTransparent: true,
            headerTitle: '',
            headerBackTitle: 'Voltar',
            //headerLeft: <HeaderButton navigation={undefined} />,
          }}
        />
      </Navigator>
    </SafeAreaView>
  );
};
