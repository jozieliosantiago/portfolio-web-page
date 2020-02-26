import React from 'react';
import Repositories from '../../components/Repositories';
import Presentation from '../../components/Presentation';
import { Container } from '../../styles/global';

const Home = () => {
  return (
    <Container>
      <Presentation />
      <Repositories />
    </Container>
  )
}

export default Home;
