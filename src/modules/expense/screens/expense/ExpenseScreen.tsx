import React from 'react';
import {View} from 'react-native';
import {Card} from '../../components/Card/Card';
import {Table} from '../../components/Table/Table';
import {Button} from '../../../../components/Button';

export const ExpenseScreen = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Card />
      <Table />
      <Button onPressButton={() => navigation.push('entries')} />
    </View>
  );
};
