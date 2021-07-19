import React  from 'react';
import { Link } from 'react-router-dom';
import fundo from '../../assets/static/fundo.jpg';
import './style/Login.css'
import logo from '../../assets/static/logo.png';



const Login = () => {
    return(
        <div className="container-login">

            <div className="row d-flex justify-content-center mt-4">
                    <div className="col">
                        <div class="mb-3">
                            <div id="logo-main">
                                <img src={logo} className="logo-main " />
                            </div>  
                        </div>
                    </div>
            </div>
            
            

            
            <form>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />  
                        </div>
                    </div>
                <div>
                <div className="row d-flex justify-content-center">
                    <div className="col-5">
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Senha </label>
                            <input type="password" className="form-control" id="exampleInputEmail1" placeholder="Senha" />  
                        </div>
                    </div>
                </div>         
                </div>
                   <div className="row text-center">
                   <Link className="forgot" to="#"> Esqueci a senha </Link>
                   </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-5 ">
                        <div class="d-grid gap-2 ">
                            <Link type="submit" to="cadastro" className="btn btn-primary shadow mb-2 " >Entrar</Link>
                            <Link type="submit" to="cadastro" className="btn btn-success shadow " >Cadastrar</Link>
                        </div>
                    </div>
                </div>
                </div>
            </form>
            
        </div>
    );
}


export default Login;