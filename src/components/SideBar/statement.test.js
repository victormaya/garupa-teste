import { screen, render, ThemeProvider, theme, fireEvent } from '../../tests'
import Sidebar from './index'

describe('Input', () => {
  // deverá verificar se o botão menu esta aparecendo e se o sidebar está fechado
  it('should check if the menu button is showing and if the sidebar is closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    )
    const buttonMenu = screen.getByTestId('button-menu-mobile')
    const sidebar = screen.getByTestId('sidebar')
    const itemsSidebar = screen.getAllByTestId('item-sidebar')
    expect(buttonMenu).toBeVisible()
    expect(sidebar).toHaveStyle('width: 0px')
    itemsSidebar.forEach((item) => {
      expect(item).toHaveStyle('opacity: 0')
    })
  })
  // devera verificar se ao clicar no botao menu o sidebar abre
  it('should check if the menu button is showing and if the sidebar is closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    )
    const buttonMenu = screen.getByTestId('button-menu-mobile')
    const sidebar = screen.getByTestId('sidebar')
    const itemsSidebar = screen.getAllByTestId('item-sidebar')
    fireEvent.click(buttonMenu)
    expect(sidebar).toHaveStyle('width: 252px')
    itemsSidebar.forEach((item) => {
      expect(item).toHaveStyle('opacity: 1')
    })
  })
  // devera verificar se ao clicar no botao fechar o sidebar fecha
  it('should check if the menu button is showing and if the sidebar is closed', () => {
    render(
      <ThemeProvider theme={theme}>
        <Sidebar />
      </ThemeProvider>
    )
    const buttonclose = screen.getByTestId('close')
    const sidebar = screen.getByTestId('sidebar')
    const itemsSidebar = screen.getAllByTestId('item-sidebar')
    fireEvent.click(buttonclose)
    expect(sidebar).toHaveStyle('width: 0px')
    itemsSidebar.forEach((item) => {
      expect(item).toHaveStyle('opacity: 0')
    })
  })
})
