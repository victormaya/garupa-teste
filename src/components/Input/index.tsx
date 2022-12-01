import React from 'react'
import CurrencyInput from 'react-currency-input-field'

import Text from 'components/Text'
import { IInput } from 'models/input'
import theme from 'styles/theme'

import { WrapInput } from './styles'

function Input({ label, inputValue, setInputValue, money }: IInput) {
  return (
    <WrapInput className="input-form">
      <label data-testid="label-input" htmlFor={label}>
        <Text text={label} weight={400} color={theme.colors.primary} small />
      </label>
      {money ? (
        <CurrencyInput
          id={label}
          data-testid="input-money"
          value={inputValue}
          onValueChange={(value) => setInputValue(value)}
          prefix="R$ "
        />
      ) : (
        <input
          data-testid="input"
          type="text"
          id={label}
          name={label}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      )}
    </WrapInput>
  )
}

export default Input
