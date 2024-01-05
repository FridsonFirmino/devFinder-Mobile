import React from 'react';
import {
    Container,
    Link,
    IconView
 } from './styled';

interface props{
  icon: React.ReactNode
  link: string
  onPress: () => void
}

export function GitHub_Link({ icon, link, onPress }:props) {
  return (
        <Container>
            <IconView>{icon}</IconView>
            <Link onPress={onPress}>{link}</Link>
        </Container>
  );
}