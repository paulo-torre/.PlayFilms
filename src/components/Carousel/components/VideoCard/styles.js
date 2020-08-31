import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  width: 298px;
  height: 168px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 16px;
  border: transparent;

  &:hover {
    opacity: .7;
    transition: opacity .3s;
  }
  
  &:not(:first-child) {
    margin-left: 30px;
  }
`;
