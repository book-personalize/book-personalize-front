import * as React from 'react'
import styled from 'styled-components'

export interface IProps {
  label: string;
  symbol: string;
}

const StyledEmoji = styled.span`
  font-size: 26px;
  vertical-align: middle;
`

const Emoji: React.FC<IProps> = ({ label = '', symbol = '' }) => (
  <StyledEmoji
    role="img"
    aria-label={label}
    aria-hidden={!label}
  >
    {symbol}
  </StyledEmoji>
)

export default Emoji



