import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 10,
  },

  headerTopBarText: {
    color: '#fff',
    fontSize: 16,
  },
  header: {
    backgroundColor: '#d0d0d0',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 5,
  },
  heading: {
    flex: 1,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
    marginHorizontal: 2,
    elevation: 1,
    borderRadius: 5,
    borderColor: '#fff',
    padding: 10,
    backgroundColor: '#fff',
  },
  cell: {
    fontSize: 12,
    textAlign: 'left',
    flex: 1,
  },
});
