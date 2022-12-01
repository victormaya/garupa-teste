import { screen, render, ThemeProvider, theme } from '../../tests'
import Header from './index'

describe('NavButtons', () => {
  // verificar se a logo aparece no header
  it('must be visible', () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    expect(screen.getByTestId('logo-mobile')).toBeVisible()
    expect(screen.getByTestId('logo-desktop')).toBeVisible()
  })

  // deverá ter o titulo 'Controle financeiro', com cor #333 e tamanho  '2.0rem'
  const title = 'Controle financeiro'
  const color = '#333'
  const size = '2.0rem'

  it("should have the title 'Controle financeiro', with color #333 and size '2.0rem'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.getByText(title)).toHaveStyle(`color: ${color}`)
    expect(screen.getByText(title)).toHaveStyle(`font-size: ${size}`)
  })

  // deverá ter o nav com as palavras 'Dashboard', 'Resumo', 'Configurações'
  const options = ['Dashboard', 'Resumo', 'Configurações']

  it("should have nav buttons with the words 'Dashboard', 'Resumo', 'Configurações'", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    )
    options.map((item) => expect(screen.queryAllByText(item)).toHaveLength(2))
  })
})
