import React from 'react'

import Text from 'components/Text'
import { ISelect } from 'models/select'
import theme from 'styles/theme'

import { WrapSelect } from './styles'

function Select({ label, selectValue, setSelectValue, options }: ISelect) {
  return (
    <WrapSelect>
      <label htmlFor="nome">
        <Text text={label} weight="400" color={theme.colors.primary} small />
      </label>
      <select
        data-testid="select"
        value={selectValue}
        onChange={({ target }) => setSelectValue(target.value)}
      >
        {options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </WrapSelect>
  )
}

export default Select
