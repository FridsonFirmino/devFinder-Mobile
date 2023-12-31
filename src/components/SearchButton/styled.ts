import styled from 'styled-components/native';

export const Container = styled.Pressable`
    width: 20%;
    height: 100%;
    background-color: ${props => props.theme.btn_Primary};
    justify-content: center;
    align-items: center;
`;

export const NameButton = styled.Text`
    font-size: 14px;
    font-family: SpaceMono_700Bold;
    color: ${props => props.theme.text_White};
`;