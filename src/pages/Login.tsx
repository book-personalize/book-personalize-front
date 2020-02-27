import * as React from 'react'
import styled from 'styled-components'

import Input from '../components/Input/index'

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  margin: 64px auto;
  padding: 48px;
  border: 1px solid #dee2e6;
  border-radius: 2px;
`

const Label = styled.p`
 font-size: 14px;
 margin-bottom: 8px;
`
const Divider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .line {
    width: 100%;
    height: 1px;
  }
  .text {
    margin: 0 16px;
    font-size: 12px;
    color: rgb(#000, 0.38);
  }
`

const onInputEmail = () => ({

})

const onInputPassword = () => ({

})

const Login: React.FC = () => (
  <LoginContainer>
    <Divider>
      <div className="line" />
      <p className="text">또는</p>
      <div className="line" />
    </Divider>
    <Label>이메일</Label>
    <Input id="email" placeholder="ID@example.com" onChange={onInputEmail}/>
    <Label>비밀번호</Label>
    <Input id="password" placeholder="비밀번호를 입력해주세요." onChange={onInputPassword}/>
  </LoginContainer>
)

export default Login
