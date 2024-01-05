import React from 'react';
import { Linking } from 'react-native'
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
    LinksArea,
    UserImage
 } from './styled';
import { InfoQtd } from '../Micro_InfoQtdArea';
import { Links } from '../Micro_Link';
import { GitHub_Link } from '../Micro_Github_links';
import { apiPropsUserRender, enShortText, formatDate } from '../../../uteis/api';

export function ResultComponent({ avatar, bio, githubURL, joined, location, name, organization, qtdFollowers, qtdFollowing, qtdRepo, twitterUser, username}:apiPropsUserRender) {
  return (
    <Container>
        <Header>
            <UserImage
                source={{uri:String(avatar)}}
            />
            <UserDescriptio>
                <Name>{enShortText(name)}</Name>
                <UserName>@{username}</UserName>
                <JoinedData>Joined {formatDate(joined)}</JoinedData>
            </UserDescriptio>
        </Header>
        <BioArea>
            <Bio>{bio}</Bio>
        </BioArea>
        <QtdInformationArea>
            <InfoQtd
                name='Repos'
                number={qtdRepo}
            />
            <InfoQtd
                name='Followers'
                number={qtdFollowers}
            />
            <InfoQtd
                name='Following'
                number={qtdFollowing}
            />
        </QtdInformationArea>
        <LinksArea>
            <Links 
                icon={<Ionicons name='location' size={20} color={'#ffff'}/>}
                link={location}
            />
            <GitHub_Link 
                icon={<Ionicons name='link' size={20} color={'#ffff'}/>}
                link={githubURL.includes('http') ? 'My GITHUB Link!' : githubURL}
                onPress={githubURL.includes('http') ? async () => await Linking.openURL(githubURL) : ()=>{alert('no link')}}
            />
            <Links 
                icon={<Ionicons name='logo-twitter' size={20} color={'#ffff'}/>}
                link={twitterUser}
            />
            <Links 
                icon={<MaterialCommunityIcons name='office-building-marker' size={20} color={'#ffff'}/>}
                link={organization}
            />
        </LinksArea>
    </Container>
  );
}