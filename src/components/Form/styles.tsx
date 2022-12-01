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

  @media (max-width: 1120px) and (min-width: 749px) {
    width: 100%;
    .inputs {
      display: grid;
      gap: 20px;
      width: 100%;
      grid-template-columns: 1fr 2fr 1fr;
    }
    button {
      align-self: flex-end;
      width: 200px;
    }
  }
  @media (max-width: 748px) {
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    padding-bottom: 30px;
  }
`
