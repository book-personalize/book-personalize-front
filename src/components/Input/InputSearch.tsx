import React from 'react'
import { Input, AutoComplete } from 'antd'
import styled from 'styled-components'

export interface IProps {
  id: string;
  size?: 'large' | 'default' | 'small';
  placeholder?: string;
  onSearch (value: string): void;
  onChange (e: React.FormEvent): void;
}

const StyledSearch = styled(Input.Search)`
  width: 300px;
  input {
    border: 0 none;
    border-radius: 0;
    border-bottom: solid 1px ${({ theme }) => theme.lightGreyColor};
  }
`

const InputSearch: React.FC<IProps> = ({ id, size = 'large', placeholder, onChange, onSearch }) => {
  return (
    <AutoComplete
      style={{ width: 200 }}
    >
      <StyledSearch
        id={id}
        size={size}
        placeholder={placeholder}
        onSearch={onSearch}
        onChange={onChange}
      />
    </AutoComplete>
  )
}

export default InputSearch
