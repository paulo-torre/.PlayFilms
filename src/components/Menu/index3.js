import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonVideo from './components/ButtonLink/video';
import { Link } from 'react-router-dom';

function SolidMenuForCategory() {
  return(
    <nav className="SolidMenu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PlayFims logo" />
      </Link>

      <Link to="/cadastro/video">
        <ButtonVideo className="ButtonVideo">
          Novo vídeo 
        </ButtonVideo>
      </Link>
    </nav>
  );
}

export default SolidMenuForCategory;