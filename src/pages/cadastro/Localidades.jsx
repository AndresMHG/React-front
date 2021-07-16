import React, { useState } from 'react';
import { MdModeEdit } from "react-icons/md";
import './style/cadastro.css';
import { Modal, Button} from "react-bootstrap";

const Localidades = () => {

    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);


    return(
        <div className="container_cadastro m-4">
            <h5 className="">Localidades</h5>
            <div className="row">
                <div class="col-auto me-auto"></div>
                <div class="col-auto">
                    <button type="button" class=" float-right btn shadow-sm btn-success mb-4" onClick={handleShow}>Cadastro de Localidades</button>
                </div>
                 
            </div>
            <table class="table table-borderless mr-4">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">UF</th>
                    <th scope="col">Município</th>
                    <th scope="col">Local</th>
                    <th scope="col">CEP</th>
                    <th scope="col">Editar</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>RO</td>
                        <td>Rondônia</td>
                        <td>Lorem ipsum </td>
                        <td> 80420-180 </td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>AC</td>
                        <td>Acre</td>
                        <td>Lorem ipsum </td>
                        <td> 84220-180  </td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>AM</td>
                        <td>Amazonas</td>
                        <td>Lorem ipsum </td>
                        <td> 89520-180  </td>
                        <td> <MdModeEdit onClick={handleShow2} /> </td>
                    </tr>
                    <tr>
                        <th scope="row">4</th>
                        <td>RR</td>
                        <td>Roraima</td>
                        <td>Lorem ipsum </td>
                        <td> 11420-180  </td>
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
                                <label for="exampleInputEmail1" class="form-label">UF</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="UF" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Município</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Município." aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Local</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Local" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="CEP." aria-describedby="emailHelp" />
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
                                <label for="exampleInputEmail1" class="form-label">UF</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="UF" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Município</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Município." aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">Local</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Local" aria-describedby="emailHelp" />
                            </div>
                        </div>

                        <div className="row mt-2">
                            <div className="col">
                                <label for="exampleInputEmail1" class="form-label">CEP</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="CEP." aria-describedby="emailHelp" />
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

export default Localidades;
