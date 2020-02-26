import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { LoaderStyle } from './styles';

const Loader = () => {
  return (
    <LoaderStyle>
      <FontAwesomeIcon icon={faSpinner} pulse />
    </LoaderStyle>
  );
};

export default Loader;
