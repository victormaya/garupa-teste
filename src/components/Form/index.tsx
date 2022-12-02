import React, { useState } from 'react'

import Input from 'components/Input'
import Select from 'components/Select'
import Text from 'components/Text'
import Title from 'components/Title'
import theme from 'styles/theme'

import { WrapForm } from './styles'

function Form({ finishSubmit }: { finishSubmit: () => void }) {
  const [transactionValue, setTransactionValue] = useState<string>('Compra')
  const [productName, setProductName] = useState<string>('')
  const [productValue, setProductValue] = useState<number>(0)

  function handleSubmit(event: React.FormEvent<EventTarget>) {
    event.preventDefault()
    if (transactionValue && productName && productValue) {
      const listItems =
        (window.localStorage.items && JSON.parse(window.localStorage.items)) ||
        []
      const itemsObject = [
        ...listItems,
        {
          type: transactionValue,
          name: productName,
          value: productValue
        }
      ]
      window.localStorage.items = JSON.stringify(itemsObject)
      setProductName('')
      setProductValue(0)
      finishSubmit()
    }
  }

  return (
    <WrapForm onSubmit={handleSubmit} data-testid="form">
      <Title title="Nova transação" color={theme.colors.black} small />
      <div className="inputs">
        <Select
          label="Tipo de transação"
          options={['Compra', 'Venda']}
          selectValue={transactionValue}
          setSelectValue={setTransactionValue}
        />
        <Input
          label="Nome da mercadoria"
          inputValue={productName}
          setInputValue={setProductName}
        />
        <Input
          label="Valor"
          money
          inputValue={productValue}
          setInputValue={setProductValue}
        />
      </div>
      <button
        type="submit"
        data-testid="button-submit"
        disabled={!transactionValue || !productName || !productValue}
      >
        <Text
          text="Adicionar transação"
          weight={400}
          color={theme.colors.white}
        />
      </button>
    </WrapForm>
  )
}

export default Form
