import React from 'react';
import {
    Container,
    Link,
    IconView
 } from './styled';

interface props{
  icon: React.ReactNode
  link: string
}

export function Links({ icon, link }:props) {
  return (
        <Container>
            <IconView>{icon}</IconView>
            <Link>{link}</Link>
        </Container>
  );
}