import React from "react";
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    background-color: #141D2F;
    align-items: center;
    justify-content: center;
`;

export const ContainerLoding = styled.View`
    width: 100%;
    height: 95%;
    background-color: #141D2F;
    align-items: center;
    justify-content: center;
`;

export const AppName = styled.Text`
    font-size: 22px;
    font-family: monospace;
    font-weight: bold;
    color: white;
    margin-top: 5px;
    margin-bottom: 10px;
`;

export const FirmaArea = styled.View`
    width: 100%;
    height: 100px;
    align-items: center;
`
export const From = styled.Text`
    font-size: 14px;
    font-family: monospace;
    color: gray;
`;

export const FirmaName = styled.Text`
    font-size: 16px;
    font-family: monospace;
    font-weight: bold;
    color: white;
    margin: 3px;
`;