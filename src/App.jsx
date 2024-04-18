
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from './components/layouts/logIn/LoginAdmins'
import Registro from './components/layouts/registration/Registro'
import Home from "./components/layouts/home/Home"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/registro",
    element: <Registro />,
  },
  {
    path: "/home",
    element: <Home />,
  }
])
function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}
export default App
