import React from 'react'
import styled from 'styled-components'

import Input from '../components/Input/index'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

const JoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  margin: 64px auto;
  padding: 32px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  
  input {
    margin: 8px 0 16px;
  }
`

const Label = styled.p`
  font-size: 14px;
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 16px 0;
  width: 100%;

  .line {
    flex: 1;
    height: 0.3px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .text {
    margin: 0 16px;
    font-size: 12px;
    color: rgba(0, 0, 0, 0.38);
  }
`

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

const onInputEmail = () => ({

})

const onInputPassword = () => ({

})

const onSubmit = () => ({

})

const onCheckSaveID = () => ({

})

const Join: React.FC = () => (
  <JoinContainer>
    <Button label="페이스북으로 회원가입" disabled={false} loading={false} onClick={onSubmit} />
    <Button label="구글로 회원가입" disabled={false} loading={false} onClick={onSubmit} />
    <Divider>
      <hr className="line" />
      <span className="text">또는</span>
      <hr className="line" />
    </Divider>
    <Label>이름</Label>
    <Input id="name" placeholder="이름을 입력해주세요." onChange={onInputEmail}/>
    <Label>이메일</Label>
    <Input id="email" placeholder="ID@example.com" onChange={onInputEmail}/>
    <Label>비밀번호</Label>
    <Input id="password" placeholder="비밀번호를 입력해주세요." onChange={onInputPassword}/>
    <Label>비밀번호 확인</Label>
    <Input id="passwordRepeat" placeholder="비밀번호를 한번 더 입력해주세요." onChange={onInputPassword}/>
    <CheckboxWrapper>
      <Checkbox label="회원가입 및 운영약관 동의" onChange={onCheckSaveID}/>
    </CheckboxWrapper>
    <Button label="회원가입" disabled={false} loading={false} onClick={onSubmit} />
  </JoinContainer>
)

export default Join
