import { screen, render, ThemeProvider, theme, fireEvent } from '../../tests'
import Form from './index'

describe('From', () => {
  const finishSubmit = jest.fn()
  // deverá aparecer o titulo, o select, o input de nome, o input de valor e o botão
  it('the title, select, name input, value input and button should appear', () => {
    render(
      <ThemeProvider theme={theme}>
        <Form finishSubmit={finishSubmit} />
      </ThemeProvider>
    )
    // title
    expect(screen.getByText('Nova transação')).toBeInTheDocument()
    // select
    expect(screen.getByText('Tipo de transação')).toBeInTheDocument()
    // input name
    expect(screen.getByText('Nome da mercadoria')).toBeInTheDocument()
    // input value
    expect(screen.getByText('Valor')).toBeInTheDocument()
    // button submit
    expect(screen.getByText('Adicionar transação')).toBeInTheDocument()
  })

  // verificar se chamando o onSubmit
  it('check if calling onSubmit', () => {
    render(
      <ThemeProvider theme={theme}>
        <Form finishSubmit={finishSubmit} />
      </ThemeProvider>
    )

    // preencher select
    const select = screen.getByTestId('select')
    fireEvent.change(select, { target: { value: 'Compra' } })

    // preencher input de nome do produto
    const inputName = screen.getByTestId('input')
    fireEvent.change(inputName, { target: { value: 'Celular' } })

    // preencher input de valor do produto
    const inputValue = screen.getByTestId('input-money')
    fireEvent.change(inputValue, { target: { value: '4000' } })

    // salvar dados e limpar dados
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(select).toHaveValue('Compra')
    expect(inputName).toHaveValue('')
    expect(inputValue).toHaveValue('R$ 0')
  })
})
