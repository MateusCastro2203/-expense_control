import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {styles} from './styles';

export const Table = () => {
  const data = [
    {
      Id: 1,
      Categoria: 'Salário',
      Data: '05/01/2024',
      Descricao: 'Empresa',
      Valor: 'R$ 1.000,00',
    },
    {
      Id: 2,
      Categoria: 'Salário2',
      Data: '07/01/2024',
      Descricao: 'Empresa',
      Valor: 'R$ 1.000,00',
    },
    {
      Id: 3,
      Categoria: 'Salário3',
      Data: '08/01/2024',
      Descricao: 'Empresa',
      Valor: 'R$ 1.000,00',
    },
    {
      Id: 4,
      Categoria: 'Salário4',
      Data: '10/01/2024',
      Descricao: 'Empresa',
      Valor: 'R$ 1.000,00',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.Categoria}</Text>
      <Text style={styles.cell}>{item.Data}</Text>
      <Text style={styles.cell}>{item.Descricao}</Text>
      <Text style={styles.cell}>{item.Valor}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Categoria</Text>
        <Text style={styles.heading}>Data</Text>
        <Text style={styles.heading}>Descrição</Text>
        <Text style={styles.heading}>Valor</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => {
          item.Id.toString();
        }}
        renderItem={renderItem}
      />
    </View>
  );
};
