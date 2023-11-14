import { useState } from "react"

function Condicional(){

    const [email, setEmail] = useState()

    const[userEmail, setUserEmail] = useState()

    function limparEmail(e){
        setUserEmail('');  
    }

    function enviarEmail(e){
        e.preventDefault();
        setUserEmail(email);  
    }
    return (
        <div>
            <h2>Cadastre seu e-mail:</h2>
            <form>
                <input type="email" 
                placeholder="Digite seu email..."
                onChange={(e)=> setEmail(e.target.value)}/>
                <button type="submit" onClick={enviarEmail}>Enviar Email</button>
                {enviarEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>
            
        </div>
    )
}

export default Condicional