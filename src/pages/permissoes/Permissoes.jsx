import React, { useState } from 'react';
import { Modal, Button, } from 'react-bootstrap';
import { MdModeEdit } from "react-icons/md";




const Permissoes = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <div className="container_cadastro p-4">
            <div className="row mx-0 mb-5">
                <div className="col">
                <h5 >Premissões</h5>
                </div>
            </div>
            <table class="table table-hover">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Cargo</th>
                <th scope="col">Tipo de Acceso</th>
                <th scope="col">Data Alteração</th>
                <th scope="col">Editar</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
                <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
                <tr>
                    <th scope="row">5</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
                <tr>
                    <th scope="row">6</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
                <tr>
                    <th scope="row">7</th>
                    <td>Mark</td>
                    <td>Cargador</td>
                    <td>@Area de Carga</td>
                    <td>@Area de Carga</td>
                    <td onClick={handleShow}> <MdModeEdit /> </td>
                </tr>
            </tbody>
            </table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <form className="p-4"> 
                <div className="row mt-2">
                    <div className="col">
                        <label for="exampleInputEmail1" class="form-label">Usuário</label>
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
            </form>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
            </div>
    );
}

export default Permissoes;
