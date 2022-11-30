import { screen, render, ThemeProvider, theme, fireEvent } from '../../tests'
import Select from './index'

describe('Select', () => {
  // deverá aparecer o label e o select e gerar valor ao escolher uma opçao
  it('the label and the select should appear and generate value when choosing an option', () => {
    const setSelectValue = jest.fn()
    render(
      <ThemeProvider theme={theme}>
        <Select
          label="testando label do select"
          options={['Compra', 'Venda']}
          selectValue=""
          setSelectValue={setSelectValue}
        />
      </ThemeProvider>
    )
    const options = ['Compra', 'Venda']
    expect(screen.getByText('testando label do select')).toBeVisible()
    const element = screen.getByTestId('select')
    expect(element).toBeVisible()
    fireEvent.change(element, { target: { value: options[0] } })
    expect(element).toHaveValue(options[0])
  })
})
