import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Input from '../components/Input/index'
import Button from '../components/Button'
import Checkbox from '../components/Checkbox'

const LoginContainer = styled.div`
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

const Guide = styled.p`
  font-size: 14px;
  text-align: center;
  margin-top: 16px;

  a {
    text-decoration: underline;
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

const Login: React.FC = () => (
  <LoginContainer>
    <Button label="페이스북으로 로그인" disabled={false} loading={false} onClick={onSubmit} />
    <Button label="구글로 로그인" disabled={false} loading={false} onClick={onSubmit} />
    <Divider>
      <hr className="line" />
      <span className="text">또는</span>
      <hr className="line" />
    </Divider>
    <Label>이메일</Label>
    <Input id="email" placeholder="ID@example.com" onChange={onInputEmail}/>
    <Label>비밀번호</Label>
    <Input id="password" placeholder="비밀번호를 입력해주세요." onChange={onInputPassword}/>
    <CheckboxWrapper>
      <Checkbox label="로그인 상태 유지"  onChange={onCheckSaveID}/>
      <Label>비밀번호 찾기</Label>
    </CheckboxWrapper>
    <Button label="로그인" disabled={false} loading={false} onClick={onSubmit} />
    <Guide>
      아직 북, 한 사람 회원이 아니신가요? &nbsp;
      <Link to="/join">회원가입</Link>
    </Guide>
  </LoginContainer>
)

export default Login
