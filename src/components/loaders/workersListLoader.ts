
import { $API } from "../../htttp/api";
import { IActionLoaderProps } from "../../types/IActionLoaderProps";
import { IFilterOption } from "../pages/workers_page/types/IFilterOption";
import { IWorkerItem } from "../pages/workers_page/types/IWorkerItem";
import { IWorkersListRequestBody } from "../pages/workers_page/types/WorkersListRequestBody";

export async function workersListLoader({request} :IActionLoaderProps){
  const requestBody = Object.fromEntries(await request.formData()) as any as IWorkersListRequestBody;
  if (requestBody["Stack"]) {
    requestBody["Stack"] = JSON.parse(requestBody["Stack"])
  }
  const url = new URL(`${$API}Employee`);
  Object.entries(requestBody).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => {
        url.searchParams.append(key, item)
      })
    } else {
      url.searchParams.set(key, value);
    }
  });
  const response = await fetch(url.href, {
    method: 'GET',
  });
  await new Promise(resolve => setTimeout(resolve, 500));
  const workers = await response.json() as IWorkerItem[];
  return workers;
}