import React from 'react'
import styled from 'styled-components'

export interface IProps {
  color?: string
  disabled?: boolean
  loading?: boolean
  onClick(e: React.MouseEvent<HTMLElement, MouseEvent>): void
}

const StyledButton = styled.button`
  color: ${({ color }) => (color === 'blue' ? '#fff' : '#222')};
  background-color: ${({ color }) => (color === 'blue' ? '#3d6afe' : '#fff')};
  border-color: ${({ color }) => (color === 'blue' ? '#e1e2e3' : '#999')};
  padding: 11px 13px;
  font-size: 15px;
  line-height: 1;
  font-weight: 600;
  cursor: pointer;
`

const Button: React.FC<IProps> = ({ children, color = 'blue', disabled = false, loading = false, onClick }) => (
  <StyledButton
    color={color}
    disabled={disabled || loading}
    onClick={onClick}
  >
    { children }
  </StyledButton>
);

export default Button
