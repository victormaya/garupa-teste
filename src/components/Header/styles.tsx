import styled from 'styled-components'

export const HeaderWrap = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.colors.secondary};

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: ${({ theme }) => theme.grid.container};
    width: ${({ theme }) => theme.grid.container};
  }
  .logo-title {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`
