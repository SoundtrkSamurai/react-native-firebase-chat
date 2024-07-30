import { AuthContextProvider, useAuth } from "@/context/authContext";
import { Slot, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import "../global.css";

const MainLayout = () => {
  const { isAuthenticated } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    // check if user is authenitcated or not
    if (typeof isAuthenticated === "undefined") return;

    const inApp = segments[0] == "(app)";
    if (isAuthenticated && !inApp) {
      // redirect user to home
      router.replace("home");
    } else if (isAuthenticated == false) {
      // redirect user to sign in page
      router.replace("signIn");
    }

    return () => {};
  }, [isAuthenticated]);

  return <Slot />;
};

const RootLayout = () => {
  return (
    <AuthContextProvider>
      <MainLayout />
    </AuthContextProvider>
  );
};

export default RootLayout;
