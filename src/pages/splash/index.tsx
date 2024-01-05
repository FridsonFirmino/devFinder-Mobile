import React from 'react';
import { Container, AppName, From, ContainerLoding, FirmaName, FirmaArea } from './styled';
import { ActivityIndicator, Image } from 'react-native';

const imgApp = require("../../../assets/Oval.png")

export function SplashScreen() {
  return (
    <Container>
        <ContainerLoding>
          <Image source={imgApp}/>
          <AppName>devFinder</AppName>
          <ActivityIndicator 
            size={"small"} 
            color={'#0079FF'}
            animating={true}
            />
        </ContainerLoding>
        <FirmaArea>
          <From>From</From>
          <FirmaName>Fridson Firmino</FirmaName>
        </FirmaArea>
    </Container>
  );
}