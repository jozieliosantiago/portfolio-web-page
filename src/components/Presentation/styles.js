import styled from 'styled-components';
import backgroundImage from '../../assets/img/background-image.jpg';

export const Container = styled.div`
  width: 100%;
  background-color: #000000e6;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 65vh;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  clip-path: polygon(0 0, 100% 0, 100% 82%, 0% 100%);
  background: url(${backgroundImage});
  background-attachment: fixed;
  background-size: cover;

  &:after {
    content: '';
    background-color: #000000e6;
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    z-index: -1;
  }

  @media (max-width: 445px) {
    min-height: 75vh;
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 73%;
  text-align: center;
  color: #fff;

  h1 {
    font-size: 50px;
    font-weight: bold;
    letter-spacing: 10px;
    margin: 15px 0;
  }

  p {
    max-width: 530px;
    text-align: center;
    margin: auto;
    line-height: 1.8;
  }
`;

export const SocialMedias = styled.div`
  margin: 15px 0;

  span {
    padding: 10px;
    font-size: 1.5em;

    a {
      color: #fff;
    }
  }
`;
