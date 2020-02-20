import React from 'react';

import { Container } from './styles';

import logo from '../../assets/images/logo_prefeitura.png';

export default function Footer() {
  return (
    <Container>
      <img src={logo} alt='Prefeitura Municipal de São Leopoldo' />
      <p>Prefeitura Municipal de São Leopoldo</p>
    </Container>
  );
}
