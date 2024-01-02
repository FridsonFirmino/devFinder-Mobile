import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 20%;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    padding: 5px;
`;

export const IconView = styled.View`
    width: 25px;
    height: 25px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.bg_Secundary};
`

export const Link = styled.Text`
    font-size: 13px;
    font-family: SpaceMono_400Regular;
    color: ${props => props.theme.text_White};
`;