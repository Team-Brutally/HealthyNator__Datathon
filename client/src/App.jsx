import { createContext, useContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import router from "./configs/router";
import { GoogleOAuthProvider } from "@react-oauth/google";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [appUser,setAppUser] = useState(null);

  return (
    <AppContext.Provider  value={{isSignedIn,setIsSignedIn,appUser,setAppUser}}>{children}</AppContext.Provider>
  );
};

function App() {
  return (
    <>
      <AppProvider>
        <GoogleOAuthProvider clientId="602618820652-l0bcbouum7jbjanknfb0r2s7gk9phd9r.apps.googleusercontent.com">
          <RouterProvider router={router} />
        </GoogleOAuthProvider>
      </AppProvider>
    </>
  );
}

export default App;
