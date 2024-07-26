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
import { Slot } from "expo-router";
import React from "react";
import { SessionProvider } from "@/components/SessionProvider";

export default function Root() {
  // Set up the auth context and render our layout inside of it.
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
