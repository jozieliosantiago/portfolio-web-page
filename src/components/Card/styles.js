import styled from 'styled-components';

export const Container = styled.div`
  width: 23vw;
  color: #000;
  border: none;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(168, 157, 157, 0.31);
  box-shadow: 0px 0px 5px 0px rgba(168, 157, 157, 0.31);
  padding: 20px;
  margin-bottom: 30px;
  min-height: 240px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: .3s;

  &:hover {
    -webkit-box-shadow: 2px 5.66px 20px 0px rgba(136, 136, 136, 0.2);
    box-shadow: 2px 5.66px 20px 0px rgba(136, 136, 136, 0.2);
  }

  h4 {
    font-size: 22px;
    font-weight: bold;
    color: #337ab7;
    margin-top: 25px;
    margin-bottom: 15px;
    text-align: center;

    a {
      text-decoration: none;
      color: #337ab7;
    }
  }

  p {
    color: #8a8a8a;
    font-size: 15px;
    text-align: center;
  }

  @media (max-width: 765px) {
    width: 45vw;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;
