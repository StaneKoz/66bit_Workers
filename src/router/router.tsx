import { createBrowserRouter } from "react-router-dom";
import Root from "../components/root/Root";
import WorkersPage from "../components/pages/workers_page/page/WorkersPage";
import ExamplePage from "../components/pages/example_page/page/ExamplePage";
import { workersListLoader } from "../components/loaders/workersListLoader";
import ErrorBoundary from "../components/error/ErrorBoundary";
import WorkerPage from "../components/pages/worker_page/WorkerPage";
import { workerLoader } from "../components/loaders/workerLoader";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <ErrorBoundary/>,
    children: [
      {
        index: true,
        element: <WorkersPage/>,
        action: workersListLoader,
      },
      {
        path: 'workers/:id',
        element: <WorkerPage/>,
        loader: workerLoader
      },
      {
        path: '/example/',
        element: <ExamplePage/>,
      }
    ]
  }
])