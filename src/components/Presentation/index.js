import React from 'react';
import { Container, Content, SocialMedias } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Presentation = () => {
  return (
    <div id="home">
      <Container>
        <Content>
          <h1>
            Joziélio Santiago
          </h1>
          <p>
            Eterno estudante de tecnologia sempre em busca de novos conhecimentos. Empanhado e determinado a dar o melhor de si para o alcance de objetivos, tanto no âmbito profissional como pessoal.
          </p>
          <SocialMedias>
            <span title="GitHub">
              <a href="https://github.com/jozieliosantiago" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </span>
            <span title="Linkedin">
              <a href="https://www.linkedin.com/in/jozieliosantiago/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </span>
          </SocialMedias>
        </Content>
      </Container>
    </div>
  );
};

export default Presentation;
