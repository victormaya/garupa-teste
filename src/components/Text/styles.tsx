import styled from 'styled-components'

export const PText = styled.p<{
  small?: boolean
  weight: string
  color: string
}>`
  font-size: ${(props) =>
    props.small ? props.theme.font.sizes.small : props.theme.font.sizes.medium};
  font-weight: ${(props) => props.weight};
`
