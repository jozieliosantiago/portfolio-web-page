import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faNode, faJava, faCss3, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { IconStyle } from './styles';

const Icon = ({ language, title }) => {
  const switchIcon = (language) => {
    switch (language.toLowerCase()) {
      case 'javascript':
        if (title.search('backend') !== -1 || title.search('api') !== -1) return faNode;
        if (title.search('frontend') !== -1 || title.search('web') !== -1 || title.search('mobile') !== -1) return faReact;
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
    <IconStyle>
      <FontAwesomeIcon icon={switchIcon(language)} />
    </IconStyle>
  );
};

export default Icon;
