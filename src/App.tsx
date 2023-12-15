import { RouterProvider, createBrowserRouter } from "react-router-dom";

import RootLayout from "./page/RootLayout";
import HomeLayout from "./page/HomeLayout";

import InterviewPage, { loader as questionLoader } from "./page/InterviewPage";
import ExitPage from "./page/ExitPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: "interview",
        element: <InterviewPage />,
        loader: questionLoader,
      },
      {
        path: "exit",
        element: <ExitPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
