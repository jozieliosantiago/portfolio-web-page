import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  h2 {
    font-size: 30px;
    font-weight: bold;
    color: #556a87;
    margin-bottom: 25px;  }
`;

export const RepositoriesContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 35px;
  @media (min-width: 700px) {
    width: 73%;
  }
  @media (max-width: 765px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90%;
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    width: 90%;
  }
`;
