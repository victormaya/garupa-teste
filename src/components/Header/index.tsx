import React from 'react'

import Logo from 'assets/svgs/Logo'
import NavButtons from 'components/NavButtons'
import SideBar from 'components/SideBar'
import Title from 'components/Title'
import Head from 'next/head'
import theme from 'styles/theme'

import { HeaderWrap } from './styles'

function Header() {
  return (
    <HeaderWrap>
      <Head>
        <title>Garupa - Controle financeiro</title>
      </Head>
      <div className="container">
        <div className="logo-title">
          <Logo />
          <Title title="Controle financeiro" color={theme.colors.primary} />
        </div>
        <NavButtons listButtons={['Dashboard', 'Resumo', 'Configurações']} />
        <SideBar />
      </div>
    </HeaderWrap>
  )
}

export default Header
