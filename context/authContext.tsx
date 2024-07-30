import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

type AuthContextType = {
  user: unknown;
  isAuthenticated: boolean | undefined;
  login: (emails: string, password: string) => void;
  logout: () => void;
  register: (
    emails: string,
    password: string,
    username: string,
    profile: unknown
  ) => void;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    // onAuthstateChanged
    setTimeout(() => {
      setIsAuthenticated(false);
    }, 3000);

    return () => {};
  }, []);

  const login = async (emails: string, password: string) => {
    try {
    } catch (error) {}
  };
  const logout = async () => {
    try {
    } catch (error) {}
  };

  const register = async (
    emails: string,
    password: string,
    username: string,
    profile: unknown
  ) => {
    try {
    } catch (error) {}
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("useAuth must be wrapped inside an AuthContextProvider");
  }

  return value;
};
