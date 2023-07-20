import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import store from "./app/store";
import "./index.css";
import Main from "./Layout/Main";
import registerServiceWorker from "./registerServiceWorker";

import MySkill from "./Components/MySkill";
import About from "./Pages/About/About";
import Page from "./Pages/Blogs/Page";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Protfolio from "./Pages/Porjects/Protfolio";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/blogs",
        element: <Page></Page>,
      },
      {
        path: "/projects",
        element: <Protfolio></Protfolio>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/skills",
        element: <MySkill></MySkill>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

registerServiceWorker();
