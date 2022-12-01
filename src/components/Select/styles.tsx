import styled from 'styled-components'

export const WrapSelect = styled.div`
  select {
    padding: 0 10px;
    margin-top: 10px;
    width: 370px;
    height: 32px;
    background: ${({ theme }) => theme.colors.white};
    border: 1px solid ${({ theme }) => theme.colors.grey};
    border-radius: 4px;
    margin-bottom: 20px;
  }
`
