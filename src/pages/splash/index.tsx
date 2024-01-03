import React from 'react';
import { Container, AppName } from './styled';
import { ActivityIndicator, Image } from 'react-native';

const imgApp = require("../../../assets/Oval.png")

export function SplashScreen() {
  return (
    <Container>
        <Image source={imgApp}/>
        <AppName>devFinder</AppName>
        <ActivityIndicator 
          size={"small"} 
          color={'#0079FF'}
          animating={true}
        />
    </Container>
  );
}