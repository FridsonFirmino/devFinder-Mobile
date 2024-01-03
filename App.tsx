import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'
import Toast from "react-native-toast-message";

import { colors } from './src/uteis/colors'
import { toastConfig } from "./src/uteis/toastMessageConfig";
import Home from './src/pages/home'

import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold
} from '@expo-google-fonts/space-mono';

import { SplashScreen } from "./src/pages/splash";


export default function App() {

  const [LoadingFonts] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  })

  if (!LoadingFonts){
    return ( 
        <SplashScreen/>
    )
  }

  return (
    <ThemeProvider theme={colors}>
        <Home/>
        <Toast config={toastConfig} position="top" />
        <StatusBar style="light" />
    </ThemeProvider>
  );
}
