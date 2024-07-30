import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
  safeArea: {
    backgroundColor: "white",
    paddingTop: Platform.OS === "android" ? Constants.statusBarHeight + 10 : 0,
  }
})