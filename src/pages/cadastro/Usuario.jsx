import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import './style/cadastro.css';
import { Modal, Button} from "react-bootstrap";

const Usuario = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return(
        <div className="container_cadastro m-4">
            <h5 className="">Usuário</h5>
            <div className="row">
                <div class="col-auto me-auto"></div>
                <div class="col-auto">
                    <button type="button" class=" float-right btn shadow-sm btn-success mb-4" onClick={handleShow}>Cadastro de Localidades</button>
                </div>
                 
            </div>
            
            <ol class="list-group list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Andres Hernandez</div>
                    Development
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Lorem ipsum</div>
                    Motorista
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Maria Gabriela</div>
                    Administrador
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Juan Perez</div>
                    Contador
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Andres Hernandez</div>
                    Development
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Lorem ipsum</div>
                    Motorista
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Maria Gabriela</div>
                    Administrador
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Juan Perez</div>
                    Contador
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
            </ol>

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
                                <label for="exampleInputEmail1" class="form-label">Matrícula</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Matrícula" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <label for="exampleInputEmail1" class="form-label">Setor / Perfil</label>
                            <div className="col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Setor</option>
                                    <option value="1">Lorem ipsum</option>
                                    <option value="2">Lorem ipsum</option>
                                    <option value="3">Lorem ipsum</option>
                                </select>
                            </div>
                            <div className="col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Perfil</option>
                                    <option value="1">Lorem ipsum</option>
                                    <option value="2">Lorem ipsum</option>
                                    <option value="3">Lorem ipsum</option>
                                </select>
                            </div>
                            
                        </div>

                        <div className="row mt-2">
                        <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Localidade</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Localidade" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="row mt-2">
                        <label for="exampleInputEmail1" class="form-label">Empresa / Órgão</label>
                            <div className="col-7">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Empresa</option>
                                    <option value="1">Lorem ipsum</option>
                                    <option value="2">Lorem ipsum</option>
                                    <option value="3">Lorem ipsum</option>
                                </select>
                            </div>
                            <div className="col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Órgão</option>
                                    <option value="1">Lorem ipsum</option>
                                    <option value="2">Lorem ipsum</option>
                                    <option value="3">Lorem ipsum</option>
                                </select>
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
                                    <input type="text" class="form-control" id="exampleInputEmail1" Value="Loren Ipsum" aria-describedby="emailHelp" />
                                </div>
                                <div className="col">
                                    <label for="exampleInputEmail1" class="form-label">Matrícula</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Matrícula" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row mt-2">
                                <label for="exampleInputEmail1" class="form-label">Setor / Perfil</label>
                                <div className="col">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Setor</option>
                                        <option value="1">Lorem ipsum</option>
                                        <option value="2">Lorem ipsum</option>
                                        <option value="3">Lorem ipsum</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Perfil</option>
                                        <option value="1">Lorem ipsum</option>
                                        <option value="2">Lorem ipsum</option>
                                        <option value="3">Lorem ipsum</option>
                                    </select>
                                </div>
                                
                            </div>

                            <div className="row mt-2">
                            <div className="col">
                                    <label for="exampleInputEmail1" class="form-label">Localidade</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Localidade" aria-describedby="emailHelp" />
                                </div>
                            </div>

                            <div className="row mt-2">
                            <label for="exampleInputEmail1" class="form-label">Empresa / Órgão</label>
                                <div className="col-7">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Empresa</option>
                                        <option value="1">Lorem ipsum</option>
                                        <option value="2">Lorem ipsum</option>
                                        <option value="3">Lorem ipsum</option>
                                    </select>
                                </div>
                                <div className="col">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Órgão</option>
                                        <option value="1">Lorem ipsum</option>
                                        <option value="2">Lorem ipsum</option>
                                        <option value="3">Lorem ipsum</option>
                                    </select>
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

export default Usuario;
