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
    @media (max-width: 1120px) {
      max-width: ${({ theme }) => theme.grid.containerMedium};
      width: ${({ theme }) => theme.grid.containerMedium};
    }
    @media (max-width: 748px) {
      max-width: ${({ theme }) => theme.grid.containerSmall};
      width: ${({ theme }) => theme.grid.containerSmall};
    }
  }
  .logo-title {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`
