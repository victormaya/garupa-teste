import { screen, render } from '../../../tests'
import Logo from './index'

describe('Logo', () => {
  it('must be visible', () => {
    render(<Logo />)
    expect(screen.getByTestId('logo-mobile')).toBeVisible()
    expect(screen.getByTestId('logo-desktop')).toBeVisible()
  })
})
