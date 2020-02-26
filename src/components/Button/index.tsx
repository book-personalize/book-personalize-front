import * as React from 'react';

import { ButtonComponent } from './Button.style';

export interface IProps {
  color?: 'primary' | 'default';
  fontSize?: string;
  label: string;
  disabled: boolean;
  loading: boolean;
  onClick (e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

const Button: React.FC<IProps> = ({ color, fontSize, disabled, loading, label, onClick }) => (
  <ButtonComponent
    color={color}
    fontSize={fontSize}
    disabled={disabled}
    loading={loading}
    onClick={(e) => onClick(e)}
  >
    {label}
  </ButtonComponent>
);

export default Button;
