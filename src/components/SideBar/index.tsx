import React, { useState } from 'react'

import { ButtonOpenSidebar, WrapSidebar } from './styles'

function SideBar() {
  const [opened, setOpened] = useState(false)

  const tabs = ['Resumo', 'Dashboard', 'Configurações']

  return (
    <>
      <ButtonOpenSidebar type="button" onClick={() => setOpened(true)}>
        <div />
      </ButtonOpenSidebar>
      <WrapSidebar opened={opened}>
        <div className="wrap-button">
          <button
            type="button"
            className="close"
            onClick={() => setOpened(false)}
          >
            <div />
          </button>
        </div>
        <ul className="items">
          {tabs.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </WrapSidebar>
    </>
  )
}

export default SideBar
