import React from 'react';
import { Image } from 'react-native';

import { Container, ImageDesciption } from './styled';

const gitHubImage = require('../../../assets/Oval.png') 

interface props{
    infoImage: string
}

export default function Info_Component({ infoImage }:props) {
  return (
    <Container>
        <Image
            source={gitHubImage}
        />
        <ImageDesciption>{infoImage}</ImageDesciption>
    </Container>
  );
}