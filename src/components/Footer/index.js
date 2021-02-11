import React from 'react';
import { Container, Icon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <Container>
      <p>
        <Icon>
          <FontAwesomeIcon icon={faCopyright} />
        </Icon>
        Copyright 2021 Joziélio Santiago. All Rights Reserved</p>
    </Container>
  )
}

export default Footer;
