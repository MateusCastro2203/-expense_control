import React from 'react';
import {View} from 'react-native';
import {Card} from '../../components/Card/Card';
import {Table} from '../../components/Table/Table';
import {Button} from '../../../../components/Button';

export const ExpenseScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Card />
      <Table />
      <Button onPressButton={() => console.log('OII')} />
    </View>
  );
};
