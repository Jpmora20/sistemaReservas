import ComputerReservation from "../computers/ComputersDisp"
import { Header } from "../header/Header"
import Rooms from "../rooms/RoomsDisp"
import StudentInfo from "../students/StudentsInfo"
import '../home/home.css'
import { useState } from "react"
import Footer from "../footer/Footer"

function Home() {
  return (
    <div className="cont">
      <Header/>
      <StudentInfo/>
      <Rooms />
      <ComputerReservation />
      <Footer />
    </div>
  )
}

export default Home
