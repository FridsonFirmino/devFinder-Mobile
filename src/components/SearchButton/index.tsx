import React from 'react';

import { Container, NameButton } from './styled';

interface props{
  onPress: () => void
}
export default function SearchButton({ onPress }:props) {
  return (
    <Container
      onPress={onPress}
    >
        <NameButton>Search</NameButton>
    </Container>
  );
}