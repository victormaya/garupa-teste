import React from 'react'

import { ITitle } from 'models/title'

import { H1Title } from './styles'

function Title({ title, small, color }: ITitle) {
  return (
    <H1Title small={small} color={color}>
      {title}
    </H1Title>
  )
}

export default Title
