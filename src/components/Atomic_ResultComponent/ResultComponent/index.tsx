import React from 'react';
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
import { githubData } from '../../../uteis/api';

export interface apiPropsUserRender {
    avatar: githubData['avatar_url']
    name: githubData['name']
    username: githubData['login']
    joined: githubData['created_at']
    bio: githubData['bio']
    qtdRepo: githubData['public_repos']
    qtdFollowers: githubData['followers']
    qtdFollowing: githubData['following']
    location: githubData['location']
    githubURL: githubData['html_url']
    twitterUser: githubData['twitter_username']
    organization: githubData['company']
}


export function ResultComponent({ avatar, bio, githubURL, joined, location, name, organization, qtdFollowers, qtdFollowing, qtdRepo, twitterUser, username}:apiPropsUserRender) {
  return (
    <Container>
        <Header>
            <UserImage
                source={{uri:String(avatar)}}
            />
            <UserDescriptio>
                <Name>{name}</Name>
                <UserName>@{username}</UserName>
                <JoinedData>{joined}</JoinedData>
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
                number={qtdFollowers ?? 0}
            />
            <InfoQtd
                name='Following'
                number={qtdFollowing ?? 0}
            />
        </QtdInformationArea>
        <LinksArea>
            <Links 
                icon={<Ionicons name='location' size={20} color={'#ffff'}/>}
                link={location}
            />
            <Links 
                icon={<Ionicons name='link' size={20} color={'#ffff'}/>}
                link={githubURL}
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