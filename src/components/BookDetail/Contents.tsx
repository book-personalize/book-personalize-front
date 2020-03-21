import React from 'react'
import styled from 'styled-components'
import { Icon } from 'antd'

interface IProps {
  title: string
  contents: string
  isShowMore?: boolean
}

const StyledContents = styled.div`
  padding: 36px 0;
  border-top: solid 1px #ccc;
  border-bottom: solid 1px #ccc;
`

const Title = styled.h2`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 24px;
`

const Body = styled.p`
  font-size: 20px;
  line-height: 1.7;
  word-break: keep-all;
  word-wrap: break-word;
  &.hidden {
    -webkit-line-clamp: 8;
    max-height: 200px;
    overflow: hidden;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
  }
`

const Toggle = styled.button`
  font-size: 16px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.3);
  margin-top: 24px;
  border: 0;
  padding: 0;
  outline: none;
  cursor: pointer;
`

const MoreButton = () => (
  <Toggle>
    더 보기 &nbsp;
    <Icon type="down" />
  </Toggle>
)

const Contents: React.FC<IProps> = ({ title, contents, isShowMore = false }) => {
  return (
    <StyledContents>
      <Title>{ title }</Title>
      <Body
        className={`${isShowMore ? '' : 'hidden'}`}
      >
        { contents }
      </Body>
      { isShowMore ? '' : MoreButton() }
    </StyledContents>
  )
}
export default Contents
