import styled from 'styled-components/native';

export const Container = styled.Pressable`
    width: 23%;
    height: 85%;
    border-radius: 15px;
    background-color: ${props => props.theme.btn_Primary};
    justify-content: center;
    align-items: center;
    margin: 2px;
`;

export const NameButton = styled.Text`
    font-size: 14px;
    font-family: SpaceMono_700Bold;
    color: ${props => props.theme.text_White};
`;