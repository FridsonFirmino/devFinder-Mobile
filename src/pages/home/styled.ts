import React from "react";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.bg_Primary};
    align-items: center;
`
export const NameApp = styled.Text`
    margin-top: 15%;
    margin-left: 5%;
    color: ${props => props.theme.text_White};
    font-size: 26px;
    font-family: SpaceMono_700Bold;
`

export const Header = styled.View`
    width: 100%;
    height: 25%;
    background-color: ${props => props.theme.bg_Primary};
`

export const InputGroup = styled.View`
    width: 90%;
    height: 25%;
    margin: 5%;
    border-radius: 15px;
    background-color: ${props => props.theme.bg_Secundary};
`

export const InputUsername = styled.TextInput`
    width: 70%;
    height: 100%;
    background-color: ${props => props.theme.bg_Secundary};
    font-size: 13px;
    font-family: SpaceMono_400Regular;
`

export const Body = styled.View`
    width: 90%;
    height: 65%;
    margin: 5%;
    border-radius: 20px;
    background-color: ${props => props.theme.bg_Secundary};
    align-items: center;
    justify-content: center;
`

