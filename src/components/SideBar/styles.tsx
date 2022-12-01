import styled from 'styled-components'

export const ButtonOpenSidebar = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background: none;
  @media (min-width: 1121px) {
    display: none;
  }
  div {
    background: ${({ theme }) => theme.colors.primary};
    height: 2px;
    width: 18px;
    position: relative;
    ::after,
    ::before {
      content: '';
      position: absolute;
      background: ${({ theme }) => theme.colors.primary};
      height: 2px;
      width: 18px;
      left: 0;
      top: 4px;
      transition: all 0.3s ease-in-out;
    }
    ::before {
      top: -4px;
    }
  }
  :hover {
    > div::after {
      /* top: -4px; */
      transform: rotate(-180deg);
    }
    > div::before {
      /* top: 4px; */
      transform: rotate(180deg);
    }
  }
`
export const WrapSidebar = styled.div<{ opened?: boolean }>`
  z-index: 10;
  top: 0;
  right: 0;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  transition: all 0.5s ease-in-out;
  width: ${(props) => (props.opened ? '252px' : '0px')};
  background: ${({ theme }) => theme.colors.primary};

  .wrap-button {
    width: 100%;
    padding: 20px 0px 0px 20px;
  }
  .close {
    background: none;
    border: none;
    cursor: pointer;
    width: 24px;
    height: 24px;
    :hover {
      > div {
        transform: rotate(45deg);
      }
    }
    > div {
      transition: all 0.3s ease-in-out;
      width: 24px;
      height: 3px;
      background: ${({ theme }) => theme.colors.white};
      transform: rotate(-45deg);
      position: relative;
      border-radius: 3px;
      ::before {
        content: '';
        position: absolute;
        background: ${({ theme }) => theme.colors.white};
        width: 24px;
        height: 3px;
        left: 0;
        top: 0px;
        transform: rotate(90deg);
        border-radius: 3px;
      }
    }
  }

  .items {
    margin-top: 30px;
    li {
      display: flex;
      opacity: ${(props) => (props.opened ? '1' : '0')};
      transition: opacity 1s;
      justify-content: flex-end;
      align-items: center;
      color: ${({ theme }) => theme.colors.white};
      height: 32px;
      font-size: ${({ theme }) => theme.font.sizes.medium};
      font-weight: ${({ theme }) => theme.font.bold};
      width: 100%;
      padding: 0 20px;
      cursor: pointer;
      :hover {
        background: #c4c4c4;
        color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`
