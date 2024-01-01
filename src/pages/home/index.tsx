import React, { useState } from 'react'
import { 
  Container, 
  NameApp, 
  Header, 
  Body, 
  InputGroup, 
  InputUsernameSearch,
  BodySection
} from './styled';

import { colors } from '../../uteis/colors';
import  SearchButton  from '../../components/SearchButton';
import { Info_Component } from '../../components/Info_Component';

export default function Home() {
  const [inputSearch, setInputSearch] = useState('')

  function getUserName(tesx: String){
    console.log(tesx)
    setInputSearch('')
  }

  return (
    <Container>
      <Header>
        <NameApp>devFinder</NameApp>
        <InputGroup>
          <InputUsernameSearch
            placeholder='Search GitHub username…'
            placeholderTextColor={colors.text_White}
            value={inputSearch}
            onChangeText={(e) => setInputSearch(e)}
          />
          <SearchButton 
            onPress={() => getUserName(inputSearch)}
          />
        </InputGroup>
      </Header>

      <Body>
        <BodySection>
          <Info_Component
            infoImage='Let’s find a Dev!'
          />
        </BodySection>
      </Body>
    </Container>
    
  )
}
 