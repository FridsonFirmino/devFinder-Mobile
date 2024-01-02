import React from 'react';
import {
    Container,
    Name,
    Number,
 } from './styled';

interface props{
  name: string
  number: string
}

export function InfoQtd({ name, number }:props) {
  return (
        <Container>
            <Name>{name}</Name>
            <Number>{number}</Number>
        </Container>
  );
}