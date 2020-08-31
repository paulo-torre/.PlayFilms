import styled from 'styled-components';

export const Title = styled.h3`
  margin-right: 15px;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: block;
  padding: 20px;
  line-height: 1;
  border-radius: 7px;
  font-style: normal;
  font-weight: bold;
  cursor: default;
  text-align: center;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 10px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;
  li {
    margin-right: auto;
    margin-left: 0px;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: #ff1026;
  min-height: 197px;
  margin-left: 10%;
  margin-top: 5%;
  margin-bottom: 16px;
  margin-left: 55px;
  margin-right: 42px;
`;
