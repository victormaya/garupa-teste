import { screen, render, ThemeProvider, theme } from '../../tests'
import Text from './index'

describe('Text', () => {
  const text = 'exemplo de teste'
  // verificar se o title aparece
  it('must be visible', () => {
    render(
      <ThemeProvider theme={theme}>
        <Text text={text} color="#333" small={true} wheight="400" />
      </ThemeProvider>
    )
    expect(screen.getByText(text)).toBeInTheDocument()
  })
})
