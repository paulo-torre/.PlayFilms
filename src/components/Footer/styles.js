import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--menu);
  border-top: 2px solid var(--linhaDoMenu);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 35px;
  padding-bottom: 35px;
  color: white;
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
