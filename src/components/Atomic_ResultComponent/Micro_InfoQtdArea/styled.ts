import styled from 'styled-components/native';

export const Container = styled.View`
    width: 25%;
    height: 80%;
    border-radius: 20px;
    background-color: ${props => props.theme.bg_Primary};
    align-items: center;
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 11px;
    font-family: SpaceMono_400Regular;
    color: ${props => props.theme.text_White};
`;

export const Number = styled.Text`
    font-size: 16px;
    font-family: SpaceMono_700Bold;
    color: ${props => props.theme.text_White};
`;