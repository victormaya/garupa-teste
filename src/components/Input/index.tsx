import React from 'react'
import CurrencyInput from 'react-currency-input-field'

import Text from 'components/Text'
import { IInput } from 'models/input'
import theme from 'styles/theme'

import { WrapInput } from './styles'

function Input({ label, inputValue, setInputValue, money }: IInput) {
  return (
    <WrapInput>
      <label data-testid="lebal-input" htmlFor="nome">
        <Text text={label} weight="400" color={theme.colors.primary} small />
      </label>
      {money ? (
        <CurrencyInput
          id={label}
          data-testid="input-money"
          defaultValue={0}
          decimalsLimit={2}
          onValueChange={(value) => setInputValue(value)}
          prefix="R$ "
        />
      ) : (
        <input
          data-testid="input"
          type="text"
          id={label}
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      )}
    </WrapInput>
  )
}

export default Input