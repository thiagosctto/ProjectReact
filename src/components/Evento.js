import Button from "./evento/Button"

function Evento(){
    function meuEvento(){
        console.log('Evento')
    }

    function segundoEvento(){
        console.log('Segundo')
    }

    return(
        <div>
            <p>Clique para disparar um elemento:</p>
            <Button event={meuEvento} text="primeiro evento" />
            <Button event={segundoEvento} text="segundo evento" />
        </div>
    )
}

export default Evento