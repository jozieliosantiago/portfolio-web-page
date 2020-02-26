import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  position: fixed;
  z-index: 1;
  background-color: ${props => `${props.bckColor}`};
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  transition: .4s;
  @media (max-width: 500px) {
    display: none;
  }
`;

export const Menu = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 73%;
  height: 100px;
  width: 100%;
  ul {
    color: #fff;
    list-style: none;
    font-family: 'Roboto-Ligth';
    li {
      float: left;
      text-transform: uppercase;
      margin: 5px 10px;
      a {
        text-decoration: none;
        color: #fff;
      }
    }
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  z-index: 1;
  .icon {
    position: absolute;
    left: 20px;
    top: 20px;
    font-size: 2em;
    color: #fff;
  }
  .mobile-menu {
    width: 100vw;
    height: 100vh;
    background-color: #00000085;
    position: fixed;
    display: ${props => `${props.display}`};
    .close-icon {
      color: #fff;
      position: absolute;
      z-index: 1;
      left: 58vw;
      font-size: 1.5em;
      top: 12px;
      animation: showCloseIcon 2s;
    }
    .options {
      position: fixed;
      width: 65vw;
      height: 100vh;
      background-color: #001F37;
      padding: 40px 20px;
      display: ${props => `${props.display}`};
      animation: showMenu .5s;
      ul {
        color: #fff;
        list-style: none;
        font-family: 'Roboto-Ligth';
        li {
          text-transform: uppercase;
          margin: 10px 0;
          a {
            text-decoration: none;
            color: #fff;
          }
        }
      }
    }
    .hide-options {
      animation: hideMenu .7s;
    }
    .hide-close-icon {
      animation: hideCloseIcon .6s;
    }
  }
  @media (min-width: 500px) {
    display: none;
  }
  @keyframes showMenu {
    0% {
      left: -65vw;
    }
    100% {
      left: 0vw;
    }
  }
  @keyframes hideMenu {
    0% {
      left: 0vw;
    }
    100% {
      left: -65vw;
    }
  }
  @keyframes showCloseIcon {
    0% {
      color: #fff0;
    }
    100% {
      color: #fff;
    }
  }
  @keyframes hideCloseIcon {
    0% {
      color: #fff;
    }
    100% {
      color: #fff0;
    }
  }
`;
