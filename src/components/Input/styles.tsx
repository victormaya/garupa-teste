import styled from 'styled-components'

export const WrapInput = styled.div`
  input {
    padding: 0 10px;
    margin-top: 10px;
    width: 370px;
    height: 32px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 4px;
    margin-bottom: 20px;
    @media (max-width: 1120px) and (min-width: 749px) {
      width: 100%;
    }
    @media (max-width: 391px) {
      width: 100%;
    }
  }
`
