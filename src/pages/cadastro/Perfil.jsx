import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import './style/cadastro.css';
import { Modal, Button} from "react-bootstrap";

const Perfil = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return(
        <div className="container_cadastro m-4">
            <h5 className="">Perfil</h5>
            <div className="row">
                <div class="col-auto me-auto"></div>
                <div class="col-auto">
                    <button type="button" class=" float-right btn shadow-sm btn-success mb-4" onClick={handleShow}>Novo perfil</button>
                </div>
                 
            </div>
            
            <ol class="list-group list-group">
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Administrador</div>
                    Todos os acessos
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Lorem ipsum</div>
                    Lorem ipsum
                    </div>
                    <span class="badge bg-primary "> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Lorem ipsum</div>
                    Lorem ipsum
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-start">
                    <div class="ms-2 me-auto">
                    <div class="fw-bold">Lorem ipsum</div>
                    Lorem ipsum
                    </div>
                    <span class="badge bg-primary"> <MdModeEdit onClick={handleShow2} /> </span>
                </li>
            </ol>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header >
                <Modal.Title> Cadastro de perfil</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="p-4"> 
                        <div className="row mb-4">
                            <div className="col-8">
                                <label for="exampleInputEmail1" class="form-label">Nome do perfil</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Nome do perfil " aria-describedby="emailHelp" />
                            </div>
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Descrição</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Descrição" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Privilégios</option>
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
                            <div className="row mb-4">
                                <div className="col-8">
                                    <label for="exampleInputEmail1" class="form-label">Nome do perfil</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" value="Loren Ipsum" aria-describedby="emailHelp" />
                                </div>
                                <div className="col">
                                    <label for="exampleInputEmail1" class="form-label">Descrição</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" value="Loren Ipsum loren" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Lorem ipsum</option>
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

export default Perfil;
