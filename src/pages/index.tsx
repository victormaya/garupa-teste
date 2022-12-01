import { useEffect, useState } from 'react'

import Form from 'components/Form'
import Header from 'components/Header'
import Statement from 'components/Statement'
import { IProduct } from 'models/product'

export default function Home() {
  const [listToStatement, setListToStatement] = useState<IProduct[]>()
  const [total, setTotal] = useState<number>(0)

  function getProducts() {
    const list: IProduct[] =
      window.localStorage.items && JSON.parse(localStorage.items)
    setListToStatement(list)
    let sum = 0
    list?.forEach((item) => {
      if (item.type === 'Compra') {
        sum -= Number(item.value)
      } else {
        sum += Number(item.value)
      }
    })
    setTotal(sum)
  }

  useEffect(() => {
    if (window) {
      getProducts()
    }
  }, [])

  return (
    <>
      <Header />
      <div className="global-container">
        <Form finishSubmit={getProducts} />
        <Statement list={listToStatement} total={total} />
      </div>
    </>
  )
}
