// dependencies
import React from 'react'

// interfaces
import { SelectProps } from './interface'

// components
import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText
} from './style'

export const SelectField = ({
  id,
  autoWidth = true,
  error,
  label,
  children,
  ...rest
  }: SelectProps) => {

  return (
    <FormControl variant="outlined" error={error}>
      <InputLabel id={id}>{label}</InputLabel>
        <Select
        labelId={id}
        label={label}
        autoWidth={autoWidth}
        {...rest}
        >
        {children}
        </Select>
      {error && <FormHelperText>Error</FormHelperText>}
    </FormControl>
  )
}
