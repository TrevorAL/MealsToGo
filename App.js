import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components/native";
import { initializeApp } from "firebase/app";
import * as firebase from "firebase";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { useFonts as useOswald, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato';

import { Navigation } from "./src/infastructure/navigation";
import { theme } from "./src/infastructure/theme";

import { RestaurantsContextProvider } from "./src/services/restaurants/restaurants.context";
import { LocationContextProvider } from "./src/services/location/location.context";
import { FavoritesContextProvider } from "./src/services/favorites/favorites.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyBEqUYLkubKb19ZfUOfpGdeUFDpguJmxDg",
  authDomain: "mealstogo-a0369.firebaseapp.com",
  projectId: "mealstogo-a0369",
  storageBucket: "mealstogo-a0369.appspot.com",
  messagingSenderId: "254831758633",
  appId: "1:254831758633:web:116e62d06ae3f3022e7b38"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);


export default function App() {
  
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }


  return (
    <>
      <ThemeProvider theme={theme}>
        <AuthenticationContextProvider>
          <FavoritesContextProvider>
            <LocationContextProvider>
              <RestaurantsContextProvider>
                <Navigation />
              </RestaurantsContextProvider>
            </LocationContextProvider>
          </FavoritesContextProvider>
        </AuthenticationContextProvider>
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
    </>
  );
}