import React from "react";
import styled from "styled-components/native";
import { colors } from "../../uteis/colors";

export const Container = styled.SafeAreaView`
    flex: 1;
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
    height: 8%;
    margin-top: 5%;
    margin-bottom: 2%;
    border-radius: 15px;
    background-color: ${props => props.theme.bg_Secundary};
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-self: center;
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

export const BodySection = styled.View`
    width: 100%;
    height: 530px;
    align-items: center;
    background-color: red;
    background-color: ${props => props.theme.bg_Primary};
`

export const Loading = styled.ActivityIndicator.attrs({
    color: colors.btn_Primary,
    size: "large"
})`
    margin-top: 55%;
    align-self: center;
`

