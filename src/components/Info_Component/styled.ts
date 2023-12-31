import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ImageDesciption = styled.Text`
    font-size: 16px;
    font-family: SpaceMono_700Bold;
    color: ${props => props.theme.text_White};
    margin-top: 10px;
`;