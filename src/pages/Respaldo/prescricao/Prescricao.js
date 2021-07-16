import React, { useState } from 'react';
import './style/Prescricao.css'
import {  MdLocalPharmacy } from "react-icons/md";
import NovoMedicamento from '../../components/novoMedicamento/NovoMedicamento';


const Prescricao = () => {
    const [ medicamentos, setMedicamento ] = useState([]);
    const [ novo, setNovo ] = useState([]);

    const eliminar = (e) => {
        console.log(e)
        console.log("Eliminado")
        setMedicamento(medicamentos, ...medicamentos.splice(e, 1))
        setNovo(!novo)
    }

    return(
        <div className="container-prescricao pl-2 pt-4">
            <div className="row mx-0 pl-3 pb-3">
                    <h5 >Prescrição</h5>
            </div>
            
            <div className="row mx-0">
                <div className="col-12">
                    <select className="custom-select" value="Presets">
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
            <div className="container mt-3 mb-1">
                <button 
                    className="btn button-light " 
                    onClick={() => setMedicamento((medicamentos) => 
                    [...medicamentos, <NovoMedicamento></NovoMedicamento>])}>
                    <MdLocalPharmacy className="icon-new"/>
                </button>
                    <span className="ml-3 font-color">Novo medicamento</span>
            </div>
            
            {
                medicamentos.map(
                    (elementInArray, index) => (
                        <NovoMedicamento newMedicamentos={() => eliminar(index)}></NovoMedicamento>
                    )
                )
            }
            <div className="row mx-0 pt-4 pb-4">
                <div className="col" 
                    style={{display: "flex", justifyContent: 'flex-end', alignItems: 'center'}}>
                    <button value="Submit" type="submit" className="btn btn-primary mr-4 px-5">Salvar</button>
                    <button type="button" className="btn button-lightt px-5">Imprimir</button>
                </div>
            </div>

           
        </div>
    );
}


export default Prescricao;