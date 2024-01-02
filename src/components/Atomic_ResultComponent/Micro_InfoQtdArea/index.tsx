import React from 'react';
import {
    Container,
    Name,
    Number,
 } from './styled';

interface props{
  name: string
  number: Number
}

export function InfoQtd({ name, number }:props) {
  return (
        <Container>
            <Name>{name}</Name>
            <Number>{String(number)}</Number>
        </Container>
  );
}