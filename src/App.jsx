
import ComputerReservation from "./components/layouts/computers/ComputersDisp"
import { Header } from "./components/layouts/header/Header"
// import LogInAdmin from "./components/layouts/logIn/LoginAdmins"
import Rooms from "./components/layouts/rooms/RoomsDisp"
import StudentInfo from "./components/layouts/students/StudentsInfo"
// import Registro from "./components/layouts/registration/Registro"

function App() {

  return (
    <>
       <Header />
       {/* <LogInAdmin /> */}
      <StudentInfo />
      <Rooms />
      <ComputerReservation /> 
      {/* <Registro /> */}
    </>
  )
}
export default App
