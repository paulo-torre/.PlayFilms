import React from 'react';

function ButtonVideo(props) {
  return(
    <a href={props.href} className={props.className}>
      {props.children}
    </a>
  );
}

export default ButtonVideo;