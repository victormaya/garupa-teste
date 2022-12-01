import { SetStateAction, useEffect, useState } from 'react'

import Form from 'components/Form'
import Header from 'components/Header'

export default function Home() {
  return (
    <>
      <Header />
      <div className="global-container">
        <Form />
      </div>
    </>
  )
}
