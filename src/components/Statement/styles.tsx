import styled from 'styled-components'

export const WarpStatement = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  width: 680px;
  .title {
    margin-bottom: 20px;
    align-self: center;
  }
  .title-table {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    padding-left: 40px;
    padding-right: 40px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
  .items-table {
    display: flex;
    justify-content: space-between;
    padding: 8px 20px;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grey};
  }
  .type-name {
    display: flex;
    gap: 10px;
  }
  .buy {
    position: relative;
    left: 2px;
  }
  .total-status {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  .total {
    margin-top: 3px;
    border-top: 1px solid ${({ theme }) => theme.colors.grey};
    padding-left: 40px;
    padding-right: 20px;
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .status {
    font-size: 10px;
    font-weight: ${({ theme }) => theme.font.normal};
    color: ${({ theme }) => theme.colors.black};
  }
  .notFound {
    margin: 8px auto;
  }
`
