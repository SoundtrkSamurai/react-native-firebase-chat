import GlobalStyles from "@/utils/GlobalStyles";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, SafeAreaView } from "react-native";

const StartPage = () => {
  return (
    <SafeAreaView
      className="items-center justify-center flex-1"
      style={GlobalStyles.safeArea}
    >
      <StatusBar style="auto" />
      <ActivityIndicator size="large" color="gray" />
    </SafeAreaView>
  );
};

export default StartPage;
