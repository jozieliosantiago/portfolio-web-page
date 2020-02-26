import React from 'react';
import { Container } from './styles';
import Icon from '../Icon';

const Card = ({ language, link, title, description }) => {
  return (
    <Container>
      <Icon language={language} title={title} />
      <h4><a href={link} target="_blank" rel="noopener noreferrer">{title}</a></h4>
      <p>{description}</p>
    </Container>
  )
};

export default Card;
