import { Context } from "vm";

export interface IActionLoaderProps {
  context?: Context | undefined,
  params: any,
  request: Request
}