import * as React from 'react'
import { Input as InputComponent } from 'antd'

interface IProps {
  id: string;
  type?: string;
  size?: 'large' | 'default' | 'small';
  value?: string;
  placeholder?: string;
  suffix?: string;
  disabled?: boolean;
  onChange (e: React.FormEvent): void;
}

const Input: React.FC<IProps> = ({ id, type = 'text', size = 'large', value, placeholder, suffix, disabled = false, onChange }) => (
  <InputComponent
    id={id}
    type={type}
    size={size}
    value={value}
    placeholder={placeholder}
    suffix={suffix}
    disabled={disabled}
    onChange={onChange}
  />
)

export default Input
