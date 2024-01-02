import React from 'react';
import {
    RepoArea,
    Name,
    Number,
 } from './styled';

interface props{
  name: string
  number: string
}

export function InfoQtd({ name, number }:props) {
  return (
        <RepoArea>
            <Name>{name}</Name>
            <Number>{number}</Number>
        </RepoArea>
  );
}