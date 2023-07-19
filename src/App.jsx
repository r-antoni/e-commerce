import { createBrowserRouter, RouterProvider } from "react-router-dom"
//Routing
import ProtectedRoute from "./router/ProtectedRoute"
import PrivateRoute from "./router/PrivateRoute"
//Pages
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./pages/Home"
import ProductDetail from "./pages/ProductDetail"

const router = createBrowserRouter([
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "/",
        element: <Login />
      },
      {
        path: "register",
        element: <Register />
      }
    ]
  },
  {
    element: <PrivateRoute />,
    children: [
      {
        path: "home",
        element: <Home />
      },
      {
        path: "product/:id",
        element: <ProductDetail />
      }
    ]
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
