import "./computers.css";

const ComputerReservation = () => {
    return(
        <form action="">
            <section>
                <h1>Informacion de los Computadores</h1>
                <div class="inputbox">
                    <input required="required" type="text" />
                    <span>Codigo del equipo</span>
                    <i></i>
                </div>
                <p className="pa">Modelos</p>
                <select inputMode="" name="" id="" className="sc sec1">
                    <option value="op1">HP</option>
                    <option value="op2">ASUS</option>
                    <option value="op2">ASUS</option>
                    <option value="op2">ASUS</option>
                    <option value="op2">ASUS</option>
                </select>
                <p className="pa">Tipo de Equipo</p>
                <select inputMode="" name="" id="" className="sc sec2">
                    <option value="">Portatil</option>
                    <option value="">Computador de Mesa</option>
                    <option value="">All in One</option>
                </select>
                <p className="pa">Software</p>
                <select name="" id="" className="sc sec3">
                    <option value="">Windows</option>
                    <option value="">MacOs</option>
                    <option value="">Ubuntu</option>
                    <option value="">Linux</option>
                </select>
            </section>
            <div className="btn-cont">
            <button><span> Reservar equipo</span></button>
            </div>
        </form>
    )
}
export default ComputerReservation