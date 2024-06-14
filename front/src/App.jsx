
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Login from './components/layouts/logIn/LoginAdmins'
import Registro from './components/layouts/registration/Registro'
import Home from "./components/layouts/home/Home"
import EditStudent from "./components/layouts/students/EditStudent"
import UpdateStudents from "./components/layouts/students/UpdateStudents"
import Footer from "./components/layouts/footer/Footer"
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
  },
  {
    path: "/editStudents",
    element: <EditStudent />
  },
  {
    path: "/updateStudents/:id",
    element: <UpdateStudents />
  },
  {
    path: "/footer",
    element: <Footer />
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
