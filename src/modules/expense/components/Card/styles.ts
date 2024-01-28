import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderColor: 'gray',
    borderRadius: 16,
    backgroundColor: 'gray',
    height: 200,
    marginTop: 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  verticalLine: {
    height: '100%', // Altura da linha (pode ajustar conforme necessário)
    width: 2, // Largura da linha
    backgroundColor: 'black', // Cor da linha
  },
  containerText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
});
