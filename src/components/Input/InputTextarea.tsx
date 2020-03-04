import * as React from 'react'
import { Input } from 'antd'

const { TextArea } = Input

export interface IProps {
  id: string;
  type?: string;
  size?: 'large' | 'default' | 'small';
  value?: string;
  placeholder?: string;
  suffix?: string;
  disabled?: boolean;
  onChange (e: React.FormEvent): void;
}

const InputTextarea: React.FC<IProps> = ({ id, value, placeholder, disabled = false, onChange }) => (
  <TextArea
    id={id}
    value={value}
    placeholder={placeholder}
    disabled={disabled}
    onChange={onChange}
  />
)

export default InputTextarea
