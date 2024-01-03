import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components'

import { colors } from './src/uteis/colors'
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
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
