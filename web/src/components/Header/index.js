import React from 'react';

import { Container } from './styles';

import tree from '../../assets/images/tree.png';

export default function Header() {
  return (
    <Container>
      <img src={tree} alt='Arboriza São Leo' />
      <h1>Arboriza São Leo</h1>
    </Container>
  );
}
