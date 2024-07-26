import useSession from "@/hooks/ctx";
import { Text, View } from "react-native";

const Index = () => {
  const { signOut } = useSession();
  return (
    <View className="items-center justify-center flex-1">
      <Text
        onPress={() => {
          // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
          signOut();
        }}
      >
        Sign Out
      </Text>
    </View>
  );
};

export default Index;
