import { screen, render, ThemeProvider, theme } from '../../tests'
import Title from './index'

describe('Title', () => {
  const title = 'Controle financeiro'
  // verificar se o title aparece
  it('must be visible', () => {
    render(
      <ThemeProvider theme={theme}>
        <Title title={title} color="#333" small={true} />
      </ThemeProvider>
    )
    expect(screen.getByText(title)).toBeInTheDocument()
  })
})
