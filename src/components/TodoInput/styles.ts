import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  btnText: {
    color: 'white',
    fontSize: 24
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 9,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: '#262626',
    borderRadius: 5,
    color: 'white',
    padding: 16,
    fontSize: 16,
    marginRight: 5,
    fontFamily: 'Inter_400Regular',
  },
})