import * as React from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

import styled from 'styled-components'

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  margin: 64px auto;
  padding: 32px;
  ${({ theme }) => theme.whiteBox}
  input {
    margin: 8px 0 16px;
  }
`

const Label = styled.p`
  font-size: 14px;
`

const StyledInput = styled(Input)`
  margin-bottom: 8px;
`

const Add: React.FC = () => {
  const onChange = () => ({})

  return (
    <AddContainer>
      <Label>책 이름</Label>
      <StyledInput id="email" placeholder="책 이름을 입력해주세요." onChange={onChange}/>
      <Label>책 저자</Label>
      <StyledInput id="password" placeholder="책 저자를 입력해주세요." onChange={onChange}/>
      <Button label="등록하기" disabled={false} loading={false} onClick={onChange}/>
    </AddContainer>
  )
}

export default Add
