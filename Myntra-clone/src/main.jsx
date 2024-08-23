import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Bag from "./routes/Bag";
import App from "./routes/App";
import Home from "./routes/Home";
import MyntraStore from "./store";
import { Provider } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={MyntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
