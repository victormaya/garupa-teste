import styled from 'styled-components'

export const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  padding: 20px 15px;
  .title {
    margin-bottom: 20px;
  }

  button {
    width: 100%;
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    height: 32px;
    border: none;
    :hover {
      filter: brightness(0.8);
      cursor: pointer;
    }
    :disabled {
      cursor: initial;
      filter: brightness(2);
    }
  }
`
