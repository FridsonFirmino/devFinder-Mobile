import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Ionicons from '@expo/vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import axios from 'axios';
import { 
  Container, 
  NameApp, 
  InputGroup, 
  InputUsernameSearch,
  BodySection,
  IconView,
  Loading
} from './styled';

import { colors } from '../../uteis/colors';
import { API_GitHub, githubData } from '../../uteis/api';
import  SearchButton  from '../../components/SearchButton';
import { ResultComponent } from '../../components/Atomic_ResultComponent/ResultComponent';

const AvatarNotFound = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59FI47FE02xesR8DhmzX56t2ENpAcWXafvw&usqp=CAU";

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
      if (error.response?.data?.message){
        Toast.show({
          type: "info",
          text1: 'SORRY',
          text2: 'GitHub user not found!',
          visibilityTime: 6000,
        })
      }
      console.log(error.response?.data?.message);
    })
    .finally(() => {
      setIsLoading(false)
    });
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Container>
        <KeyboardAwareScrollView>
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
          <BodySection>
            {isLoading ?
              (
                <Loading color={colors.text_Blue}/>
              )
              :
              (
                <ResultComponent 
                  avatar={apiData?.avatar_url ?? AvatarNotFound}
                  bio={apiData?.bio ?? 'This profile has no bio'}
                  name={apiData?.name ?? 'Has no name'}
                  username={apiData?.login  ?? 'not found'}
                  joined={new Date(apiData?.created_at ?? '')}
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
        </KeyboardAwareScrollView>
      </Container>
    </TouchableWithoutFeedback>
  )
}
 