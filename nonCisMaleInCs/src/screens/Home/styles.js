import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    paddingHorizontal: 15,
    paddingVertical: 5,
    backgroundColor: 'skyblue',
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '500',
  },
});

export default styles;
