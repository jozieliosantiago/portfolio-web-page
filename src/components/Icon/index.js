import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faJava, faCss3, faGithub } from '@fortawesome/free-brands-svg-icons';

const Icon = ({ language }) => {

  const switchIcon = (language) => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return faNodeJs;
      case 'java':
        return faJava;
      case 'css':
        return faCss3;
      default:
        return faGithub;
    }
  };

  return (
    <FontAwesomeIcon icon={switchIcon(language)} />
  );
};

export default Icon;
