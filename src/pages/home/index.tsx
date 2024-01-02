import React, { useState } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { 
  Container, 
  NameApp, 
  Header, 
  Body, 
  InputGroup, 
  InputUsernameSearch,
  BodySection,
  IconView
} from './styled';

import { colors } from '../../uteis/colors';
import { API_GitHub } from '../../uteis/api';
import  SearchButton  from '../../components/SearchButton';
import { Info_Component } from '../../components/Info_Component';
import axios from 'axios';

export default function Home() {
  const [inputSearch, setInputSearch] = useState('')

  async function getUserName(tesx: String){
    console.log(tesx)
    setInputSearch('')

    await axios.get(API_GitHub+''+tesx)
    .then(response => {
      if (response.data) {
        console.log(response.data);
      }
    })
    .catch(error => {
      console.log(error.response?.data?.message);
    });
  }

  return (
    <Container>
      <Header>
        <NameApp>devFinder</NameApp>
        <InputGroup>
          <IconView>
            <Ionicons name='search' size={18} color={colors.icon_Search_Blue}/>
          </IconView>
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
 