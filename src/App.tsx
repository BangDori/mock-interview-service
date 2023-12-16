import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from '@pages/RootLayout';
import HomeLayout from '@pages/HomeLayout';

import InterviewPage, { loader as questionLoader } from '@pages/InterviewPage';
import ExitPage from '@pages/ExitPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomeLayout />,
      },
      {
        path: 'interview',
        element: <InterviewPage />,
        loader: questionLoader,
      },
      {
        path: 'exit',
        element: <ExitPage />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
