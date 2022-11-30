export interface IInput {
  label: string
  inputValue: string | number
  setInputValue: React.Dispatch<React.SetStateAction<string | number>>
  money?: boolean
}
