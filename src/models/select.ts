export interface ISelect {
  label: string
  options: string[]
  selectValue: string | number
  setSelectValue: (value: React.SetStateAction<string>) => void
}
