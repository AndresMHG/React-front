import React, { useState } from 'react';
import './style/cadastro.css';
import { MdModeEdit } from "react-icons/md";
import { Modal, Button} from "react-bootstrap";

const Setor = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
    return(
        <div className="container_cadastro p-4">

            <h5 className="">Setor</h5>
            <div className="row m-0">
                <div class="col-auto me-auto"></div>
                <div class="col-auto">
                    <button type="button"
                    class=" float-right btn shadow-sm btn-success mb-4"
                    onClick={handleShow}
                    >
                        Novo setor
                    </button>
                </div>
            </div>  
            <table className="table table-borderless table-hover mb-2 mr-4">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Setor</th>
                    <th scope="col">Descrição</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Lorem ipsum dolor</td>
                        <td>Integer accumsan, nisl quis fermentum mollis, tortor orci pretium justo.</td>
                        <td></td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Lorem ipsum dolor</td>
                        <td>Integer accumsan, nisl quis fermentum mollis, tortor orci pretium justo.</td>
                        <td></td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Lorem ipsum dolor</td>
                        <td>Integer accumsan, nisl quis fermentum mollis, tortor orci pretium justo.</td>
                        <td></td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>Lorem ipsum dolor</td>
                        <td>Integer accumsan, nisl quis fermentum mollis, tortor orci pretium justo.</td>
                        <td></td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                </tbody>
            </table>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header >
                <Modal.Title> Cadastro de Setor</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="p-4"> 
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Setor</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Setor." aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Descrição</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Descrição." aria-describedby="emailHelp" />
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
            <Modal show={show2} onHide={handleClose2} centered>
                <Modal.Header >
                <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="p-4"> 
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Setor</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Setor." aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Descrição</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Descrição." aria-describedby="emailHelp" />
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

export default Setor;
