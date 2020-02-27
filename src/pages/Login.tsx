import * as React from 'react'
import styled from 'styled-components'

import Input from '../components/Input/index'
import Button from '../components/Button';

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 480px;
  height: 100%;
  margin: 64px auto;
  padding: 48px;
  box-sizing: border-box;
  border: 1px solid #dee2e6;
  border-radius: 2px;
  
  button {
    margin: 16px 0;
  }
`

const Label = styled.p`
  font-size: 14px;
  margin-bottom: 8px;
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
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

const Guide = styled.p`

`

const onInputEmail = () => ({

})

const onInputPassword = () => ({

})

const onSubmit = () => ({

})

const Login: React.FC = () => (
  <LoginContainer>
    <Divider>
      <hr className="line" />
      <span className="text">또는</span>
      <hr className="line" />
    </Divider>
    <Label>이메일</Label>
    <Input id="email" placeholder="ID@example.com" onChange={onInputEmail}/>
    <Label>비밀번호</Label>
    <Input id="password" placeholder="비밀번호를 입력해주세요." onChange={onInputPassword}/>
    <Button label="로그인" disabled={false} loading={false} onClick={onSubmit} />
  </LoginContainer>
)

export default Login
