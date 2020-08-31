import React from 'react';

function ButtonCadastrar(props) {
  return(
    <button href={props.href} className={props.className}>
      Cadastrar
    </button>
  );
}

export default ButtonCadastrar;