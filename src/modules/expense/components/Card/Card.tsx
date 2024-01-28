import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

export const Card = () => {
  const value = '1.000,00';

  return (
    <View style={styles.container}>
      <View style={styles.containerText}>
        <Text style={styles.text}>Valor de entrada : R${value}</Text>
      </View>
      <View style={styles.verticalLine} />
      <View style={styles.containerText}>
        <Text style={styles.text}>Saldo : R${value}</Text>
      </View>
    </View>
  );
};
