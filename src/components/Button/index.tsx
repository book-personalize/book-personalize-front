import * as React from 'react'

import { ButtonComponent } from './Button.style'

export interface IProps {
  label: string;
  onClick (e: React.MouseEvent<HTMLElement, MouseEvent>): void;
}

const Index: React.FC<IProps> = ({ label, onClick }) => (
  <ButtonComponent onClick={ (e) => onClick(e) }>
    { label }
  </ButtonComponent>
)

export default Index
