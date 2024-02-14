import { FilterOption } from "./FilterOptions";

export interface IFilterOption {
  option: { key: string, value: string },
  type: 'radio' | 'checkbox'
  items: {
    [key: string]: string
  }
}