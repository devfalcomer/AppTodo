import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  infoContainer: {
    width: '60%'
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  iconsDivider: {
    width: 1,
    height: 24,
    backgroundColor: 'rgba(196, 196, 196, 0.24)',
    marginHorizontal: 12
  },
  taskButton: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  taskMarker: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    marginRight: 10,
  },
  taskText: {
    color: '#F2F2F2',
    fontFamily: 'Inter_400Regular'
  },
  taskMarkerDone: {
    height: 20,
    width: 20,
    marginRight: 15,
  },
  taskTextDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter_400Regular'
  }
})