import React from 'react';

import { Container, NameButton } from './styled';

interface props{
  onPress: () => void
  enableButton: boolean
}
export default function SearchButton({ onPress, enableButton }:props) {
  return (
    <Container
      activeOpacity={0.6}
      onPress={onPress}
      disabled={enableButton}
    >
        <NameButton>Search</NameButton>
    </Container>
  );
}