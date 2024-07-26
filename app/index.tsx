import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import GlobalStyles from "@/utils/GlobalStyles";

const Index = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-red-200"
      style={GlobalStyles.androidSafeArea}
    >
      <StatusBar style="auto" />
      <Text className="text-3xl text-center color-black">Home</Text>
    </SafeAreaView>
  );
};

export default Index;
