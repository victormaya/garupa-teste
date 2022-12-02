import React, { useState } from 'react'
import IntlCurrencyInput from 'react-intl-currency-input'

import Text from 'components/Text'
import { IInput } from 'models/input'
import theme from 'styles/theme'

import { WrapInput } from './styles'

function Input({ label, inputValue, setInputValue, money }: IInput) {
  const currencyConfig = {
    locale: 'pt-BR',
    formats: {
      number: {
        BRL: {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        }
      }
    }
  }

  return (
    <WrapInput className="input-form">
      <label data-testid="label-input" htmlFor={label}>
        <Text text={label} weight={400} color={theme.colors.primary} small />
      </label>
      {money ? (
        <IntlCurrencyInput
          data-testid="input-money"
          currency="BRL"
          config={currencyConfig}
          value={inputValue}
          onChange={(event, value: string) => {
            setInputValue(value)
          }}
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
