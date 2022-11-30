import styled from 'styled-components'

export const H1Title = styled.h1<{ small?: boolean; color: string }>`
  font-size: ${(props) =>
    props.small ? props.theme.font.sizes.large : props.theme.font.sizes.xlarge};
  color: ${(props) => props.color};
`
