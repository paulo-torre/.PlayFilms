import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonLink from './components/ButtonLink';
import { Link } from 'react-router-dom';

function SolidMenu() {
  return(
    <nav className="SolidMenu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PlayFims logo" />
      </Link>

      <Link to="/cadastro/video">
        <ButtonLink className="ButtonLink">
          Novo vídeo 
        </ButtonLink>
      </Link>
    </nav>
  );
}

export default SolidMenu;