import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${props => props.theme.bg_Primary};
    align-items: center;
    justify-content: center;
`

export const Name = styled.Text`
    color: ${props => props.theme.text_White};
    font-size: 24px;
`