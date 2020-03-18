import React from 'react'

interface IProps {
  grade: number;
}

const BookGrade: React.FC<IProps> = ({ grade = 5 }) => {
  return (
    <div>
      {Array(grade).map(
        (el, idx) => {
        })
      }
    </div>
  )
}

export default BookGrade
