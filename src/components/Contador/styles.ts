import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  counterContainer: {
    width: '100%',
    marginTop: 20,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  create: {
    marginLeft: 20,
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#4EA8DE',
  },
  finish: {
    marginRight: 20,
    fontFamily: 'Inter_700Bold',
    fontSize: 14,
    color: '#8284FA',
  },
  iconsDivider: {
    width: '89%',
    height: 1,
    backgroundColor: 'rgba(196, 196, 196, 0.24)',
    marginHorizontal: 12,
    marginBottom: 15
  },
})