import React from 'react'

import Text from 'components/Text'
import { INavButtons } from 'models/NavButtons'
import theme from 'styles/theme'

import { WrapNavButtons } from './styles'

function NavButtons({ listButtons }: INavButtons) {
  return (
    <WrapNavButtons>
      {listButtons.map((item) => (
        <button key={item}>
          <Text text={item} color={theme.colors.primary} weight="600" />
        </button>
      ))}
    </WrapNavButtons>
  )
}

export default NavButtons
