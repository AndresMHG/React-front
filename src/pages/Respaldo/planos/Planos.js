import React, { Component } from 'react';
import './style/Planos.css'

class Planos extends Component {
    constructor (props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container-planos">
                <h2 className="title text-center pt-3">Nossos Planos</h2>
                <h3 className="subtitle-planos text-center mb-5"> Escolha abaixo o melhor plano para a sua carreira profissional! </h3>
                <div className="row mb-5 mx-0 justify-content-center">
                    <div className="col-3 card ml-5 ">
                        <div className="card-body ">
                            <h5 className="card-title text-center">Professionais de sauéde</h5>
                            <hr />
                            <p className="card-text">Protuário Digital</p>
                            <p className="card-text">Prescrição Digital</p>
                            <p className="card-text">Checagem de Interação medicamentosa</p>
                            <p className="card-text">Dados salvos em nuvem</p>
                            <p className="card-text">Hisórico médico completo dos seus pacientes</p>
                            <hr />
                            <button className="col btn btn-primary">R$ 149,90/mẽs</button>
                        </div>
                    </div>
                    <div className="col-3  card ml-4 mr-4">
                        <div className="card-body">
                            <h5 className="card-title text-center">Professionais de sauéde</h5>
                            <hr />
                            <p className="card-text">Lorem ipsum</p>
                            <p className="card-text">Lorem ipsum</p>
                            <p className="card-text">Lorem ipsum</p>
                            <p className="card-text">Lorem ipsum</p>
                            <p className="card-text">Lorem ipsum</p>
                            <p className="card-text">Lorem ipsum</p>
                            <hr />
                            <button className="col btn btn-primary">Entre em contato</button>
                        </div>
                    </div>
                    <div className="col-3 card mr-5">
                        <div className="card-body">
                            <h5 className="card-title text-center">Professionais de sauéde</h5>
                            <hr />
                            <p className="card-text mb-5">Em breve teremos um sistema disponível para sua farmácia, Laboratório ou clinica de estética</p>
                            <p className="card-text mb-3">Lorem ipsum</p>
                            <p className="card-text mb-5">Lorem ipsum</p>
                            <hr />
                            <button className="col btn btn-primary">Em breve</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Planos;