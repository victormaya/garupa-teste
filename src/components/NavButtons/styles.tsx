import styled from 'styled-components'

export const WrapNavButtons = styled.nav`
  background: ${({ theme }) => theme.colors.white};
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  button {
    height: 20px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 17px;
    :not(:last-child) {
      border-right: 1px solid ${({ theme }) => theme.colors.grey};
    }
  }
  @media (max-width: 1120px) {
    display: none;
  }
`
