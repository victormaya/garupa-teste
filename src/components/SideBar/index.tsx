import React, { useState } from 'react'

import { ButtonOpenSidebar, WrapSidebar } from './styles'

function SideBar() {
  const [opened, setOpened] = useState(false)

  const tabs = ['Resumo', 'Dashboard', 'Configurações']

  return (
    <>
      <ButtonOpenSidebar
        data-testid="button-menu-mobile"
        type="button"
        onClick={() => setOpened(true)}
      >
        <div />
      </ButtonOpenSidebar>
      <WrapSidebar opened={opened} data-testid={'sidebar'}>
        <div className="wrap-button">
          <button
            type="button"
            className="close"
            data-testid="close"
            onClick={() => setOpened(false)}
          >
            <div />
          </button>
        </div>
        <ul className="items">
          {tabs.map((item) => (
            <li data-testid="item-sidebar" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </WrapSidebar>
    </>
  )
}

export default SideBar
