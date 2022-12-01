import React from 'react'

import Text from 'components/Text'
import Title from 'components/Title'
import { IProduct } from 'models/product'
import theme from 'styles/theme'

import { WarpStatement } from './styles'

function Statement({ list, total }: { list: IProduct[]; total: number }) {
  function verifyStatus() {
    if (total > 0) {
      return '[LUCRO]'
    } else if (total < 0) {
      return '[PREJUÍZO]'
    } else {
      return ''
    }
  }

  return (
    <WarpStatement>
      <Title title="Extrato de transações" color={theme.colors.black} small />
      <div className="title-table">
        <Text
          text="Mercadoria"
          weight={theme.font.bolder}
          color={theme.colors.black}
        />
        <Text
          text="Valor"
          weight={theme.font.bolder}
          color={theme.colors.black}
        />
      </div>
      {total > 0 ? (
        list?.map((item: IProduct, index: number) => {
          return (
            <div
              key={item.name + item.type + item.value + index}
              className="items-table"
            >
              <div className="type-name">
                <span className={item.type === 'Compra' && 'buy'}>
                  <Text
                    text={item.type === 'Compra' ? '-' : '+'}
                    weight={theme.font.normal}
                    color={theme.colors.black}
                    small
                  />
                </span>
                <Text
                  text={item.name}
                  weight={theme.font.normal}
                  color={theme.colors.black}
                  small
                />
              </div>
              <Text
                text={Number(item.value).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
                weight={theme.font.normal}
                color={theme.colors.black}
                small
              />
            </div>
          )
        })
      ) : (
        <span className="notFound">
          <Text
            text="Nenhuma mercadoria encontrada"
            color={theme.colors.black}
            weight={theme.font.normal}
          />
        </span>
      )}
      <div className="total">
        <Text
          text="Total"
          weight={theme.font.bolder}
          color={theme.colors.black}
        />
        <div className="total-status">
          <Text
            text={total.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}
            weight={theme.font.bolder}
            color={theme.colors.black}
            small
          />
          <span className="status" data-testid="status">
            {verifyStatus()}
          </span>
        </div>
      </div>
    </WarpStatement>
  )
}

export default Statement
