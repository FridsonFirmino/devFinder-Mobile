import React from 'react'
import { Platform } from 'react-native'
import { 
  Container, 
  NameApp, 
  Header, 
  Body, 
  InputGroup, 
  InputUsername} from './styled';

import { colors } from '../../uteis/colors';
import  SearchButton  from '../../components/SearchButton';
import { Info_Component } from '../../components/Info_Component';


export default function Home() {
  return (
    <Container>
      <Header>
        <NameApp>devFinder</NameApp>
        <InputGroup
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          <InputUsername
            placeholder='Search GitHub username…'
            placeholderTextColor={colors.text_White}
          />
          <SearchButton/>
        </InputGroup>
      </Header>

      <Body>
        <Info_Component
          infoImage='Let’s find a Dev!'
        />
      </Body>
    </Container>
    
  )
}
 