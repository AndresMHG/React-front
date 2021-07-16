import React, { useState } from 'react';
import './style/cadastro.css';
import { MdModeEdit } from "react-icons/md";
import { Modal, Button} from "react-bootstrap";

const Empresa = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return(
        <div className="container_cadastro m-4">
            <h5 className="">Empresa</h5>
            <div className="row">
                <div class="col-auto me-auto"></div>
                <div class="col-auto">
                    <button type="button" class=" float-right btn shadow-sm btn-success mb-4" onClick={handleShow}>Novo empresa</button>
                </div>
                 
            </div>
            <table class="table table-borderless table-hover mr-4">
                <thead>
                    <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">CNPJ</th>
                    <th scope="col">Endereço</th>
                    <th scope="col">Município</th>
                    <th scope="col">Responsável</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">E-mail</th>
                    <th scope="col">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr><tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <td>Lorem ipsum </td>
                        <td>75.256.701/0001-95</td>
                        <td>Rua Engenheiro Carlos</td>
                        <td>Parana</td>
                        <td>Lorem </td>
                        <td>(88)2559-8311</td>
                        <td>lorem@gmail.com</td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                   
                </tbody>
            </table>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header >
                <Modal.Title> Cadastro de Empresa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="p-4"> 
                        <div className="row">
                            <div className="col-8">
                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite seu nome " aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="CNPJ" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Endereço" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-4">
                                <label for="exampleInputEmail1" class="form-label">Município</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Município" aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Responsável</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Responsável" aria-describedby="emailHelp" />
                            </div
                            >
                        </div>
                        <div className="row mt-2">
                            <div className="col-5">
                                <label for="exampleInputEmail1" class="form-label">Telefone</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder=" Digite seu Telefone" aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">E-mail	</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="E-mail" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className="container">
                    <div class="col-auto me-auto">
                        <Button variant="light" className="px-5 border" onClick={handleClose}>
                            Close
                        </Button>
                    </div>
                    <div class="col-auto ">
                    <Button className="btn btn-primary px-5" onClick={handleClose}>
                        Enviar
                    </Button>
                    </div>
                </Modal.Footer>
            </Modal>
            {/* Modal Edit */}
            <Modal show={show2} onHide={handleClose2} size="lg" centered>
                <Modal.Header >
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <form className="p-4"> 
                        <div className="row">
                            <div className="col-8">
                                <label for="exampleInputEmail1" class="form-label">Nome</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value="Lorem ipsum " aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">CNPJ</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" readonly placeholder="75.256.701/0001-95" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Endereço</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value="Rua Engenheiro Carlos	" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-4">
                                <label for="exampleInputEmail1" class="form-label">Município</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value="Parana" aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Responsável</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value="Lorem" aria-describedby="emailHelp" />
                            </div
                            >
                        </div>
                        <div className="row mt-2">
                            <div className="col-5">
                                <label for="exampleInputEmail1" class="form-label">Telefone</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value="(88)2559-831" aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">E-mail	</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value="lorem@gmail.com" aria-describedby="emailHelp" />
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer className="container">
                    <div class="col-auto me-auto">
                        <Button variant="light" className="px-5 border" onClick={handleClose2}>
                            Cancelar
                        </Button>
                    </div>
                    <div class="col-auto ">
                    <Button className="btn btn-primary px-5" onClick={handleClose2}>
                        Edit
                    </Button>
                    </div>
                </Modal.Footer>
            </Modal>


        </div>
    );
}

export default Empresa;
