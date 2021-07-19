import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Password.css'

const Password = () => {
    return (
        <div className="d-flex justify-content-center align-items-center ">
            <div class=" card m-4 p-4">
                <h5 className="text-center title pt-5">
                    Verifique seu e-mail  <br/>
                </h5>

                <p className="text-center subtitle pt-2 m-5"> 
                Enviaremos um link para seu e-mail para  <br/> que você possa alterar sua senha  
                </p>

                <div class="d-flex justify-content-center mt-4">
                    <input 
                        type ="text" 
                        name ="Teu e-mail" 
                        className ="form-control mb-3 mr-4 "
                        placeholder="Teu e-mail"
                    />
                </div>
                <div class="d-grid gap-2 mb-4 mt-4">
                            <Link to="/" class="btn btn-secondary shadow" type="button">Recuperar senha</Link>
                        </div>
                <div class="mb-3 text-center">
                    <Link className="forgot" to="/"> Volte ao início da sessão </Link>
                </div>
            </div>
        </div>
    );
}

export default Password;