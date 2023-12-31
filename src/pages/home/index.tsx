import React from 'react'
import { 
  Container, 
  NameApp, 
  Header, 
  Body, 
  InputGroup, 
  InputUsername} from './styled';
import { colors } from '../../uteis/colors';
import  SearchButton  from '../../components/searchButton';


export default function Home() {
  return (
    <Container>
      <Header>
        <NameApp>devFinder</NameApp>
        <InputGroup>
          <InputUsername
            placeholder='Search GitHub username…'
            placeholderTextColor={colors.text_White}
            inputMode='search'
          />
          <SearchButton/>
        </InputGroup>
      </Header>

      <Body>

      </Body>
    </Container>
    
  )
}
 