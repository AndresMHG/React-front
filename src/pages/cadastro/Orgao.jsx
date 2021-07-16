import React from 'react';
import './style/cadastro.css';

const Orgao = () => {
    return(
        <div className="container_cadastro">
            <form className="p-4"> 
                <div className="row mt-2">
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Insira seu nome." aria-describedby="emailHelp" />
                    </div>
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">Cargo</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Insira sua posição." aria-describedby="emailHelp" />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">RG</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite su RG." aria-describedby="emailHelp" />
                    </div>
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">CPF</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite su CPF." aria-describedby="emailHelp" />
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Digite su Email." aria-describedby="emailHelp" />
                    </div>
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">Telefone</label>
                        <input type="number" class="form-control" id="exampleInputEmail1" placeholder="Digite su Telefone." aria-describedby="emailHelp" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col">
                    <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Orgao;
