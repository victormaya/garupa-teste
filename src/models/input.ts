export interface IInput {
  label: string
  inputValue: string | number
  setInputValue: (value: React.SetStateAction<string>) => void
  money?: boolean
}
