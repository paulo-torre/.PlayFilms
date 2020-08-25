import React, { children } from 'react';
import SolidMenuForVideo from '../Menu/index2';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--fundo);
  color: white;
  flex: 1;
  padding-top: 100px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault2({ children }) {
  return(
    <>
      <SolidMenuForVideo />
        <Main>
          {children}
        </Main>
      <Footer />
    </>
  );
}

export default PageDefault2;