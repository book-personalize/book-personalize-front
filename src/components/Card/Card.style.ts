import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100%;
  margin-right: 24px;
  &:last-child {
    margin-right: 0;
  }
`

export const Image = styled.img`
  display: block;
  width: 140px;
  height: 100%;
`

export const Title = styled.p`
  font-size: 13px;
  font-weight: bold;
  color: rgb(0, 0, 0, 0.87);
  margin-top: 8px;
`

export const Author = styled.p`
  font-size: 11px;
  color: rgb(0, 0, 0, 0.6);
  margin-top: 4px;
`
