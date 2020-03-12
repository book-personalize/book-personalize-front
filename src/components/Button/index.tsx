import * as React from 'react';

import { Button as ButtonComponent } from 'antd';

export interface IProps {
  type?: 'primary' | 'ghost' | 'danger' | 'default';
  size?: 'small' | 'large' | 'default';
  shape?: 'circle' | 'round' | '';
  label: string;
  disabled?: boolean;
  loading?: boolean;
  block?: boolean;
  onClick (e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

const Button: React.FC<IProps> = ({ type = 'primary', size = 'large', label, disabled = false, loading = false, block = true, onClick }) => (
  <ButtonComponent
    type={type}
    size={size}
    disabled={disabled}
    loading={loading}
    onClick={(e) => onClick(e)}
    block={block}
  >
    { label }
  </ButtonComponent>
);

export default Button