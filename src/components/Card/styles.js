import styled from 'styled-components';

export const Container = styled.div`
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
  h4 {
    font-size: 22px;
    font-weight: bold;
    color: #337ab7;
    margin-top: 25px;
    margin-bottom: 15px;
    a {
      text-decoration: none;
      color: #337ab7;
    }
  }
  p {
    color: #8a8a8a;
    font-size: 15px;
  }
`;
