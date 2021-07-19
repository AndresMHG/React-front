import React  from 'react';
import { Link } from 'react-router-dom';
import fundo from '../../assets/static/fundo.jpg';
import './style/Login.css'
import logo from '../../assets/static/logo.png';



const Login = () => {
    return(
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form className="login100-form validate-form">

                        <span className="login100-form-title p-b-43 mb-4">
                            <h4>Login</h4>
                        </span>
                        
                        
                        <div className="mb-4 shadow " >
                            <input className="form-control" type="email" name="email" placeholder="Email" />
                            <span className="label-input100">Email</span>
                        </div>
                        
                        
                        <div className="mb-4 shadow">
                            <input className="form-control" type="password" name="pass" placeholder="Password" />
                            <span className="label-input100">Password</span>
                        </div>

                        <div class="form-check mb-2 ">
                            <input class="form-check-input shadow" type="checkbox" value="" id="flexCheckIndeterminate" />
                            <label class="form-check-label" for="flexCheckIndeterminate">
                                Lembrar senha
                            </label>
                        </div>


                        <div className="flex-sb-m w-full p-t-3 p-b-32 mb-4">
                            <div>
                                <Link to="/password/reset" className="txt1">
                                    Esqueceu a senha?
                                </Link>
                            </div>
                        </div>
                

                        <div class="d-grid gap-2">
                            <Link to="/cadastro/setor" class="btn btn-success shadow" type="button">Iniciar sessão</Link>
                        </div>
                        

                        <div className="login100-form-social flex-c-m">
                            <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                                <i className="fa fa-facebook-f" aria-hidden="true"></i>
                            </a>

                            <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </div>
                    </form>

                    <div className="login100-more image-fondo">
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Login;