// @flow
import React from 'react'
import styled from 'react-emotion'
import Input from '../elements/Input'
import Text from '../elements/InputText'

const Label = styled.label({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  marginBottom: '2rem',
})

// -------------------------------------

type Props = {
  handleChange: (SyntheticInputEvent<*>) => void,
  isRequired?: boolean,
  label: string,
  name: string,
  placeholder?: string,
  type?: string,
  value: string,
}

const InputControl = ({
  handleChange,
  isRequired,
  label,
  name,
  placeholder,
  type,
  value,
  ...props
}: Props) => (
  <Label htmlFor={name}>
    <Input
      aria-label={label}
      id={name}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
      required={isRequired}
      type={type}
      value={value}
      {...props}
    />
    <Text>{label}</Text>
  </Label>
)

InputControl.defaultProps = {
  isRequired: false,
  placeholder: '',
  type: 'text',
}

export default InputControl
