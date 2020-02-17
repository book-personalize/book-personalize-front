import * as React from 'react'

import { InputComponent, InputWrap } from './Input.style'

export interface IProps {
  id: string;
  type?: string;
  value?: string;
  placeholder: string;
  onChange (e: React.FormEvent): void;
}

const Input: React.FC<IProps> = ({ id, type = 'text', value, placeholder, onChange }) => (
    <InputWrap>
      <InputComponent
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e: React.FormEvent) => onChange(e)}
      />
    </InputWrap>
)

export default Input
