import React from 'react'

import Logo from 'assets/svgs/Logo'
import NavButtons from 'components/NavButtons'
import Title from 'components/Title'
import theme from 'styles/theme'

import { HeaderWrap } from './styles'

function Header() {
  return (
    <HeaderWrap>
      <div className="container">
        <div className="logo-title">
          <Logo />
          <Title title="Controle financeiro" color={theme.colors.primary} />
        </div>
        <NavButtons listButtons={['Dashboard', 'Resumo', 'Configurações']} />
      </div>
    </HeaderWrap>
  )
}

export default Header
