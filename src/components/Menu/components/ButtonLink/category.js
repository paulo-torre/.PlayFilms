import React from 'react';

function ButtonCategory(props) {
  return(
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonCategory;