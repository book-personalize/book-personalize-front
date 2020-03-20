import styled from 'styled-components'

export const CardContainer = styled.div`
  height: 100%;
  margin-right: 24px;
  cursor: pointer;
  &:last-child {
    margin-right: 0;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  &:hover {
    img {
      opacity: 0.3;
    }
    div {
      opacity: 1;
    }
  }
`

export const Image = styled.img`
  display: block;
  width: 140px;
  height: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  opacity: 1;
  
`

export const Hover = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  transition: .5s ease;
  opacity: 0;
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
