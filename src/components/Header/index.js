import React, { useState, useEffect } from 'react';
import { Container, Menu, MobileMenu } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

  const [color, setColor] = useState('#0000');
  const [display, setDisplay] = useState('none');

  const handleScroll = () => {
    if (document.documentElement.scrollTop >= 90) {
      setColor('#001F37')
    } else {
      setColor('#0000');
    }
  }

  const showHideMenu = () => {
    const optionsMenu = document.querySelector('#options-menu');
    const closeIcon = document.querySelector('#close-icon');
    if (display === 'none') {
      setDisplay('block');
      optionsMenu.setAttribute('class', 'options');
      closeIcon.setAttribute('class', 'close-icon');
    } else {
      setTimeout(() => {
        setDisplay('none');
      }, 500);
      optionsMenu.setAttribute('class', 'options hide-options');
      closeIcon.setAttribute('class', 'close-icon hide-close-icon');
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <>
      <Container bckColor={color}>
        <Menu>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#repositories">Repositórios</a></li>
          </ul>
        </Menu>
      </Container>
      <MobileMenu display={display}>
        <div className="icon">
          <FontAwesomeIcon icon={faBars} onClick={() => showHideMenu()} />
        </div>
        <div className="mobile-menu">
          <div className="close-icon" id="close-icon">
            <FontAwesomeIcon icon={faTimes} onClick={() => showHideMenu()} />
          </div>
          <div className="options" id="options-menu">
            <ul>
              <li><a href="#home" onClick={() => showHideMenu()}>Home</a></li>
              <li><a href="#repositories" onClick={() => showHideMenu()}>Repositórios</a></li>
            </ul>
          </div>
        </div>
      </MobileMenu>
    </>
  )
}

export default Header;
