import React from 'react'

import { IText } from 'models/text'

import { PText } from './styles'

function Text({ text, small, weight, color }: IText) {
  return (
    <PText small={small} weight={weight} color={color}>
      {text}
    </PText>
  )
}

export default Text
