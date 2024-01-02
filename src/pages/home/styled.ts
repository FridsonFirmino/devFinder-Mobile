import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bg_Primary};
    align-items: center;
`

export const Header = styled.View`
    width: 100%;
    height: 25%;
    background-color: ${props => props.theme.bg_Primary};
`

export const NameApp = styled.Text`
    margin-top: 15%;
    margin-left: 5%;
    color: ${props => props.theme.text_White};
    font-size: 26px;
    font-family: SpaceMono_700Bold;
`

export const InputGroup = styled.View`
    width: 90%;
    height: 27%;
    margin: 5%;
    border-radius: 15px;
    background-color: ${props => props.theme.bg_Secundary};
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const IconView = styled.View`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.bg_Secundary};
`

export const InputUsernameSearch = styled.TextInput`
    width: 65%;
    height: 100%;
    background-color: ${props => props.theme.bg_Secundary};
    font-size: 13px;
    font-family: SpaceMono_400Regular;
    color: ${props => props.theme.text_White};;
`

export const Body = styled.View`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bg_Primary};
    align-items: center;
`

export const BodySection = styled.View`
    width: 90%;
    height: 72%;
    margin: 5px;
    border-radius: 20px;
    background-color: ${props => props.theme.bg_Secundary};
    align-items: center;
    justify-content: center;
`

