import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Card from '../Card';

const Repositories = () => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const response = await api.get('/jozieliosantiago/repos');
      console.log(response);
      setRepositories(response.data);
    }
    fecthData();
  }, [])

  return (
    <div>
      <h1>Repositories</h1>
      {
        repositories.map(repository => (
          <Card
            key={repository.id}
            language={repository.language}
            link={repository.html_url}
            title={repository.name}
            description={repository.description}
          />
        ))
      }
    </div>
  )
}

export default Repositories;
