import { screen, render, ThemeProvider, theme } from '../../tests'
import NavButtons from './index'

describe('NavButtons', () => {
  const list = ['ex1', 'ex2', 'ex3']
  // verificar se o title aparece
  it('must be visible', () => {
    render(
      <ThemeProvider theme={theme}>
        <NavButtons listButtons={list} />
      </ThemeProvider>
    )
    list.map((item) => expect(screen.getByText(item)).toBeInTheDocument())
  })
})
