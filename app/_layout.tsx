// import { Stack } from "expo-router";
// import React from "react";

// import "../global.css";

// export default function RootLayout() {
//   return (
//     <Stack
//       screenOptions={{
//         headerShown: false,
//       }}
//     />
//   );
// }
import SessionProvider from "@/components/SessionProvider";
import { Slot } from "expo-router";

const Root = () => {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
};

export default Root;
