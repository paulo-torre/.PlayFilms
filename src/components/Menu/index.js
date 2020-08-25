import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import { Link } from 'react-router-dom';
import ButtonCategory from './components/ButtonLink/category';
import ButtonVideo from './components/ButtonLink/video';

function Menu() {
  return(
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PlayFims logo" />
      </Link>

      <Link to="/cadastro/video">
        <ButtonVideo className="ButtonVideo">
          Novo vídeo 
        </ButtonVideo>
      </Link>

      <Link to="/cadastro/categoria">
        <ButtonCategory className="ButtonCategory">
          Nova Categoria 
        </ButtonCategory>
      </Link>
    </nav>
  );
}

export default Menu;