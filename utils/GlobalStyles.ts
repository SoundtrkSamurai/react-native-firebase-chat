import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Constants.statusBarHeight + 10
  }
})