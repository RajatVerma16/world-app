
{/* This is special react router dom method whcihc we eneed  */}
import { createBrowserRouter, RouterProvider } from "react-router-dom";



import { AppLayout } from "./components/Layout/AppLayout";

import "./App.css";

 {/* These are some CSS root  */}


import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Country } from "./pages/Country";
import { Contact } from "./pages/Contact";
import { ErrorPage } from "./pages/ErrorPage";
import { CountryDetails } from "./components/Layout/CountryDetails";


 {/* Here we have to create a react router.  */}

const router = createBrowserRouter([                                    
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "country",
        element: <Country />,
      },
      {
        path: "country/:id",
        element: <CountryDetails />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]); 


const App = () => {
  return <RouterProvider router={router}> </RouterProvider>;
};

export default App;
