import { SetStateAction, useEffect, useState } from 'react'

import Header from 'components/Header'
import Input from 'components/Input'
import Select from 'components/Select'
import styled from 'styled-components'

export default function Home() {
  const [productName, setProductName] = useState<string>()
  const [productValue, setProductValue] = useState<number>(0)
  const [transactionValue, setTransactionValue] = useState<string>('Compra')

  return (
    <>
      <Header />
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
    </>
  )
}
