import ComputerReservation from "../computers/ComputersDisp"
import { Header } from "../header/Header"
import Rooms from "../rooms/RoomsDisp"
import StudentInfo from "../students/StudentsInfo"
import '../home/home.css'
function Home() {
  return (
    <div>
      <Header/>
      <StudentInfo/>
        <Rooms />
        <ComputerReservation />
    </div>
  )
}

export default Home
