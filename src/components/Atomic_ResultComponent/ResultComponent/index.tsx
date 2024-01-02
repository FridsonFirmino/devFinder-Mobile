import React from 'react';
import { Image } from "react-native";
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
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
import { Links } from '../Micro_Link';

const Avatardd = require('../../../../assets/Oval.png') 
const Location = require('../../../../assets/003-pin.png') 
const building = require('../../../../assets/001-office-building.png') 
const Twitter = require('../../../../assets/004-twitter.png') 
const Group = require('../../../../assets/Group33.png') 

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
            <Links 
                icon={<Ionicons name='location' size={20} color={'#ffff'}/>}
                link='San Francisco'
            />
            <Links 
                icon={<Ionicons name='link' size={20} color={'#ffff'}/>}
                link='https://github.blog'
            />
            <Links 
                icon={<Ionicons name='logo-twitter' size={20} color={'#ffff'}/>}
                link='Not Available'
            />
            <Links 
                icon={<Ionicons name='logo-facebook' size={20} color={'#ffff'}/>}
                link='Not Available'
            />
            <Links 
                icon={<Ionicons name='logo-instagram' size={20} color={'#ffff'}/>}
                link='Not Available'
            />
            <Links 
                icon={<Ionicons name='logo-linkedin' size={20} color={'#ffff'}/>}
                link='Not Available'
            />
            <Links 
                icon={<MaterialCommunityIcons name='office-building-marker' size={20} color={'#ffff'}/>}
                link='@github'
            />
            
            
        </LinksArea>
        
        
    </Container>
  );
}