import styled from 'styled-components'

export const ButtonComponent = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 4px;
  border: 0 none;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.57;
  text-align: center;
  color: #ffffff;
  background-color: #0077c7;
  color: ${props => props.color === 'primary' ? '#ffffff' : '#0077c7'};
  background: ${props => props.color === 'primary' ? '#0077c7' : '#ffffff'};
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 119, 199, 1);
  }
  
`
