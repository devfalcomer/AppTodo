import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  img: {
    marginTop: 75,
    color: 'white',
    fontSize: 25,
  },

  TastText: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingLeft: 20,
    paddingRight: 25,
  },
  criadas: {
    marginTop: 20,
    fontSize: 14,
    color: '#4EA8DE',
    fontFamily: 'Inter_700Bold'
  },
  concluidas: {
    marginTop: 20,
    fontSize: 14,
    color: '#8284FA',
    fontFamily: 'Inter_700Bold'
  },
  listEmptyText: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold'
  },
  listEmptyText2: {
    color: 'black',
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'Inter_400Regular'
  },
})