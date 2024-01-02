import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    margin: 5px;
    border-radius: 20px;
    background-color: ${props => props.theme.bg_Secundary};
`;

export const Header = styled.View`
    width: 100%;
    height: 20%;
    margin-top: 10px;
    border-radius: 20px;
    background-color: ${props => props.theme.bg_Secundary};
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
`;

export const UserImage = styled.Image`
    width: 70px;
    height: 70px;
    border-radius: 50px;
`;

export const UserDescriptio = styled.View`
    width: 60%;
    height: 100%;
    padding: 5px;
    background-color: ${props => props.theme.bg_Secundary};
    justify-content: center;
`;

export const Name = styled.Text`
    font-size: 16px;
    font-family: SpaceMono_700Bold;
    color: ${props => props.theme.text_White};
`;

export const UserName = styled.Text`
    font-size: 13px;
    font-family: SpaceMono_400Regular;
    color: ${props => props.theme.text_Blue};
`;

export const JoinedData = styled.Text`
    margin-top: 5px;
    font-size: 13px;
    font-family: SpaceMono_400Regular;
    color: ${props => props.theme.text_White};
`;

export const BioArea = styled.View`
    width: 90%;
    height: 18%;
    background-color: ${props => props.theme.bg_Secundary};
    align-self: center;
    margin-top: 10px;
`;

export const Bio = styled.Text`
    padding: 5px;
    font-size: 13px;
    font-family: SpaceMono_400Regular;
    color: ${props => props.theme.text_White};
`;


export const QtdInformationArea = styled.View`
    width: 90%;
    height: 15%;
    border-radius: 20px;
    background-color: ${props => props.theme.bg_Primary};
    align-self: center;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 10px;
`;

export const LinksArea = styled.View`
    width: 90%;
    height: 35%;
    align-self: center;
    margin-top: 10px;
`;