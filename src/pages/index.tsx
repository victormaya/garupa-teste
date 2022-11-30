import { useState } from 'react'

import Header from 'components/Header'
import Input from 'components/Input'
import styled from 'styled-components'

export default function Home() {
  const [productName, setProductName] = useState<string>()
  const [productValue, setProductValue] = useState<number>(0)

  const Page = styled.section`
    display: flex;
    justify-content: center;
    .container {
      width: ${({ theme }) => theme.grid.container};
    }
  `

  return (
    <>
      <Header />
      <Page>
        <div className="container">
          <Input
            label="Nome da mercadoria"
            inputValue={productName}
            setInputValue={() => setProductName}
          />
          <Input
            label="Valor"
            money
            inputValue={productValue}
            setInputValue={() => setProductValue}
          />
        </div>
      </Page>
    </>
  )
}
