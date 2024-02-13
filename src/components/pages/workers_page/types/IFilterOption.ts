import { FilterOption } from "./FilterOptions";

export interface IFilterOption {
  option: { key: string, value: string },
  items: {
    [key: string]: string
  }
}