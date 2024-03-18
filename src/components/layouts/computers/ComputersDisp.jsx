const ComputerReservation = () => {
    return(
        <form action="">
            <section>
                <h1>Informacion de los Computadores</h1>
                <p>Codigo de Equipo</p>
                <input type="text" />
                <p>Modelos</p>
                <select inputMode="" name="" id="">
                    <option value="op1">HP</option>
                    <option value="op2">ASUS</option>
                    <option value="op2">ASUS</option>
                    <option value="op2">ASUS</option>
                    <option value="op2">ASUS</option>
                </select>
                <p>Tipo de Equipo</p>
                <select inputMode="" name="" id="">
                    <option value="">Portatil</option>
                    <option value="">Computador de Mesa</option>
                    <option value="">All in One</option>
                </select>
                <p>Software</p>
                <select name="" id="">
                    <option value="">Windows</option>
                    <option value="">MacOs</option>
                    <option value="">Ubuntu</option>
                    <option value="">Linux</option>
                </select>
            </section>
            <button type="button">Reservar Equipo</button>
        </form>
    )
}
export default ComputerReservation