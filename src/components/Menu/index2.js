import React from 'react';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import ButtonVideo from './components/ButtonLink/video';
import { Link } from 'react-router-dom';
import ButtonCategory from './components/ButtonLink/category';

function SolidMenuForVideo() {
  return(
    <nav className="SolidMenu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="PlayFims logo" />
      </Link>

      <Link to="/cadastro/categoria">
        <ButtonCategory className="ButtonCategory2">
          Nova Categoria 
        </ButtonCategory>
      </Link>
    </nav>
  );
}

export default SolidMenuForVideo;