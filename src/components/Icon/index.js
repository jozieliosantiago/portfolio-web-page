import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faNode, faJava, faCss3, faGithub, faReact } from '@fortawesome/free-brands-svg-icons';
import { IconStyle } from './styles';

const Icon = ({ language, title }) => {
  function returnJavaScriptIcon() {
    if (title.includes('backend') || title.includes('api')) return faNode;
    if (title.includes('frontend') || title.includes('web') || title.includes('mobile')) return faReact;
    return faNodeJs;
  }

  const switchIcon = (language) => {
    switch (language.toLowerCase()) {
      case 'javascript':
        return returnJavaScriptIcon();
      case 'typescript':
        return returnJavaScriptIcon();
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
