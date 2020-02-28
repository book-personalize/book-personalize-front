import * as React from 'react'
import { Checkbox as CheckboxComponent } from 'antd'
import { CheckboxChangeEvent } from 'antd/es/checkbox'

export interface IProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;

  onChange (e: CheckboxChangeEvent): void;
}

const Checkbox: React.FC<IProps> = ({ label = '', checked = false, disabled = false, onChange }) => (
  <CheckboxComponent
    checked={checked}
    disabled={disabled}
    onChange={(e: CheckboxChangeEvent) => onChange(e)}
  >
    { label }
  </CheckboxComponent>
)

export default Checkbox
