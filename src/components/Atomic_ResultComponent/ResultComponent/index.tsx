import React from 'react';
import { Image } from "react-native";
import { 
    Container,
    Header,
    UserDescriptio,
    Name,
    UserName,
    JoinedData,
    BioArea,
    Bio,
    QtdInformationArea,
    LinksArea
 } from './styled';
import { InfoQtd } from '../Micro_InfoQtdArea';

const Avatardd = require('../../../../assets/Oval.png') 

export function ResultComponent() {
  return (
    <Container>
        <Header>
            <Image
                source={Avatardd}
            />
            <UserDescriptio>
                <Name>Fridson Firmino</Name>
                <UserName>@fridsonfirmino</UserName>
                <JoinedData>Joined 25 Jan 2011</JoinedData>
            </UserDescriptio>
        </Header>
        <BioArea>
            <Bio>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.</Bio>
        </BioArea>
        <QtdInformationArea>
            <InfoQtd
                name='Repos'
                number='8'
            />
            <InfoQtd
                name='Followers'
                number='3938'
            />
            <InfoQtd
                name='Following'
                number='9'
            />
        </QtdInformationArea>
        <LinksArea>
        </LinksArea>
        
        
    </Container>
  );
}