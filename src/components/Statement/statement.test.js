import { screen, render, ThemeProvider, theme } from '../../tests'
import Statement from './index'

describe('Input', () => {
  // deverá exibir o titulo "Extrato de Transações", e as colunas "Mercadoria" e "Valor"
  it('should display the title "Extrato de transações", and the columns "Mercadoria", "Total" and "Valor"', () => {
    render(
      <ThemeProvider theme={theme}>
        <Statement list={[]} total={0} />
      </ThemeProvider>
    )
    expect(screen.getByText('Extrato de transações')).toBeVisible()
    expect(screen.getByText('Mercadoria')).toBeVisible()
    expect(screen.getByText('Total')).toBeVisible()
    expect(screen.getByText('Valor')).toBeVisible()
  })

  // Deverá exibir "Nenhuma mercadoria encontrada" e o valor do total: "R$ 0,00". O status não deve aparecer.
  it('It should display "Nenhuma mercadoria encontrada" and the total amount: "R$ 0,00". Status should not appear', () => {
    render(
      <ThemeProvider theme={theme}>
        <Statement list={[]} total={0} />
      </ThemeProvider>
    )
    expect(screen.getByText('Nenhuma mercadoria encontrada')).toBeVisible()
    expect(screen.getByText('R$ 0,00')).toBeVisible()
    expect(screen.getByTestId('status')).not.toHaveTextContent('[LUCRO]')
    expect(screen.getByTestId('status')).not.toHaveTextContent('[PREJUÍZO]')
  })
})
