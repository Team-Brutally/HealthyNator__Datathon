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
  const [appUser, setAppUser] = useState(null);

  const [docList, setDocList] = useState([
    {
      docName: "Dr. Sneha Patel",
      docimg: "/docimg2.jpg",
      qualification: ["MBBS", "MS"],
      specialization: ["Cardiologist", "Internal Medicine"],
      rating: 92,
      numberOfPatientsTreated: 150,
      price: 2500,
      experience: "20",
    },
    {
      docName: "Dr. Rahul Sharma",
      docimg: "/docimg3.jpg",
      qualification: ["MBBS", "DM"],
      specialization: ["Neurologist", "Psychiatrist"],
      rating: 88,
      numberOfPatientsTreated: 180,
      price: 3000,
      experience: "18",
    },
    {
      docName: "Dr. Priya Gupta",
      docimg: "/docimg2.jpg",
      qualification: ["MBBS", "MD"],
      specialization: ["Dermatologist", "Allergist"],
      rating: 94,
      numberOfPatientsTreated: 120,
      price: 1800,
      experience: "22",
    },
  ]);

  return (
    <AppContext.Provider
      value={{
        isSignedIn,
        setIsSignedIn,
        appUser,
        setAppUser,
        docList,
        setDocList,
      }}
    >
      {children}
    </AppContext.Provider>
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
