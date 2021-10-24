import React from 'react'
import { FormControl, InputLabel, MenuItem, Select as MUISelect } from '@mui/material'

const Select = ({ handleChange, label, selectedValue, values }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <MUISelect
        labelId='demo-simple-select-label'
        id='demo-simple-select'
        value={selectedValue}
        label={label}
        onChange={handleChange}
      >
        {values.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </MUISelect>
    </FormControl>
  )
}

export default Select
