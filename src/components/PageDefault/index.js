import React, { Children } from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--menu);
  color: white;
  flex: 1;
  padding-top: 100px;
  padding-left: 5%;
  padding-right: 5%;
`;

function PageDefault({ children }) {
  return(
    <div>
      <Menu />
        <Main>
          {children}
        </Main>
      <Footer />
    </div>
  );
}

export default PageDefault;