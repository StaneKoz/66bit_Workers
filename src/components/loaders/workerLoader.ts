import { $API } from "../../htttp/api";
import { IActionLoaderProps } from "../../types/IActionLoaderProps";
import { IWorkerItem } from "../pages/workers_page/types/IWorkerItem";

export async function workerLoader({ params }: IActionLoaderProps) {
  const { id } = params;
  const response = await fetch(`${$API}Employee/${id}`, {
    method: 'GET'
  });
  const worker = await response.json() as IWorkerItem;
  return worker;
}