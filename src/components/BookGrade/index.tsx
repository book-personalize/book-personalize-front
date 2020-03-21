import React from 'react'
import styled from 'styled-components'
import { fill } from 'lodash/fp'

import { Icon } from 'antd'

interface IProps {
  grade: number
  isShowGrade?: boolean
}

const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
`

const StyledIcon = styled(Icon)`
  font-size: 24px;
  color: #ffc104;
`

const Text = styled.span`
  font-size: 18px;
  margin: 3px 0 0 8px;
`

const BookGrade: React.FC<IProps> = ({ grade, isShowGrade = false }) => {
  const maxGrade = 5
  const init = Array(maxGrade).fill(0)
  const grades = fill( 0, grade, 1)(init)

  return (
    <GradeContainer>
      {grades.map(
        (value, idx) => (
          <StyledIcon
            type="star"
            key={idx}
            theme={ value ? 'filled' : 'outlined' }
          />
        ))
      }
      <Text>({ grade }/{ maxGrade })</Text>
    </GradeContainer>
  )
}

export default BookGrade
