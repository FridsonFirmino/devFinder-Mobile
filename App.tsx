import React from "react";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator } from 'react-native';
import { ThemeProvider } from 'styled-components'

import { colors } from './src/uteis/colors'
import Home from './src/pages/home'

import {
  useFonts,
  SpaceMono_400Regular,
  SpaceMono_700Bold,
} from '@expo-google-fonts/space-mono';


export default function App() {

  const [LoadingFonts] = useFonts({
    SpaceMono_400Regular,
    SpaceMono_700Bold,
  })

  if (!LoadingFonts){
    return (
      <ActivityIndicator size={"large"} color='#5700AF'/>
    )
  }

  return (
    <ThemeProvider theme={colors}>
      <Home/>
      <StatusBar style="light" />
    </ThemeProvider>
  );
}
