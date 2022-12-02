import { screen, render, ThemeProvider, theme, fireEvent } from '../../tests'
import Input from './index'

describe('Input', () => {
  // deverá aparecer o label, o input e gerar valor ao digitar
  it('the label should appear, the input and generate value when typing', () => {
    const setInputValue = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Input
          label="testando label"
          InputValue=""
          setInputValue={setInputValue}
        />
      </ThemeProvider>
    )
    expect(screen.getByText('testando label')).toBeVisible()
    const element = screen.getByTestId('input')
    expect(element).toBeVisible()
    fireEvent.change(element, { target: { value: 'Testando' } })
    expect(element).toHaveValue('Testando')
  })
  // deverá aparecer o label, o input e gerar valor em dinheiro ao digitar
  it('the label should appear, from the input and generate cash value when typing', () => {
    const setInputValue = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Input
          money
          label="testando label"
          InputValue=""
          setInputValue={setInputValue}
        />
      </ThemeProvider>
    )
    const elementMoney = screen.getByTestId('input-money')
    expect(elementMoney).toBeVisible()
    fireEvent.change(elementMoney, { target: { value: '4000' } })
    expect(elementMoney).toHaveValue('R$ 40,00')
  })
})
