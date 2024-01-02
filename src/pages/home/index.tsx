import React, { useState } from 'react'
import { ActivityIndicator } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
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
import { API_GitHub, githubData } from '../../uteis/api';
import  SearchButton  from '../../components/SearchButton';
import  Info_Component from '../../components/Info_Component';
import { ResultComponent } from '../../components/Atomic_ResultComponent/ResultComponent';

const Avatardd = require('../../../assets/Oval.png') 

export default function Home() {
  const [inputSearch, setInputSearch] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [apiData, setApiData] = useState<githubData>()

  async function handlerRequestUserData(user: String){
    if (!user) return
    setIsLoading(true)
    console.log(user)
    setInputSearch('')

    await axios.get(API_GitHub+''+user)
    .then(response => {
      if (response.data) {
        console.log(response.data?.avatar_url)
        setApiData(response.data);
      }
    })
    .catch(error => {
      console.log(error.response?.data?.message);
    })
    .finally(() => {
      setIsLoading(false)
    })
    ;
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
            value={inputSearch.toLocaleLowerCase()}
            onChangeText={(e) => setInputSearch(e)}
          />
          <SearchButton 
            enableButton={isLoading ? true : false}
            onPress={() => handlerRequestUserData(inputSearch)}
          />
        </InputGroup>
      </Header>
      <Body>
        <BodySection>
          {isLoading ?
            (
              <ActivityIndicator color={colors.text_Blue}/>
            )
            :
            (
              <ResultComponent 
                avatar={apiData?.avatar_url ?? Avatardd}
                bio={apiData?.bio ?? 'This profile has no bio'}
                name={apiData?.name  ?? 'Has no name'}
                username={apiData?.login  ?? 'not found'}
                joined={apiData?.created_at  ?? 'not date'}
                qtdRepo={apiData?.public_repos  ?? 0}
                qtdFollowers={apiData?.followers ?? 0}
                qtdFollowing={apiData?.following ?? 0}
                location={apiData?.location  ?? 'Has no location'}
                githubURL={apiData?.html_url  ?? 'Has no github link'}
                twitterUser={apiData?.twitter_username  ?? 'Not Available'}
                organization={apiData?.company  ?? 'Has no company'}
              />
            )
          }
          
        </BodySection>
      </Body>
    </Container>
  )
}
 