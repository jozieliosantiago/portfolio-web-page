import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import Card from '../Card';
import Loader from '../Loader';
import { Container, RepositoriesContainer } from './styles';

const Repositories = () => {

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fecthData() {
      const response = await api.get('/jozieliosantiago/repos');
      setRepositories(response.data);
    }
    fecthData();
  }, [])

  return (
    <div id="repositories">
      <Container>
        <h2>REPOSITÓRIOS</h2>
        {!repositories || repositories.length === 0 ? (
          <Loader />
        ) : (
            <RepositoriesContainer>
              {
                repositories
                  .filter(repository => {
                    return repository.name.search('.github.io') === -1;
                  })
                  .map(repository => (
                    <Card
                      key={repository.id}
                      language={repository.language}
                      link={repository.html_url}
                      title={repository.name}
                      description={repository.description}
                    />
                  ))
              }
            </RepositoriesContainer>
          )}
      </Container>
    </div>
  )
}

export default Repositories;
