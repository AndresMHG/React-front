import React, { useState } from 'react'
import NewExames from '../../components/newExames/NewExames'
import './style/Exames.css'
import { MdLocalPharmacy } from "react-icons/md";

const Exames = () => {
  const [count, setCount] = useState([]);
  const [bandera, setbandera] = useState(false);


  const borrar = (e) => {
    console.log(e)
    console.log("eliminado")
    setCount(count, ...count.splice(e, 1))
    setbandera(!bandera)
  }

  return (
    <div className="container-exames pt-4 pl-2">
      <div className="row mx-0 pl-3 pb-3">
          <h5 >Exames</h5>
        </div>
      <div className="col-12 m-0">
        <select className="custom-select" aria-label="Default select example">
          <option >Preset</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
      <div className="col-12 mt-3">
        <select className="custom-select">
          <option >Exame</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      {
        count.map(
          (elementInArray, index) => (
            <NewExames mifuncion={() => borrar(index)}></NewExames>
          )
        )
      }

    <div className="container mt-4 mb-2">
      <button 
          className="btn button-light mb-2" 
          onClick={() => setCount((count) => 
          [...count, <NewExames></NewExames>])}>
          <MdLocalPharmacy className="icon-new"/>
        </button>
        <span className="ml-3 font-color">Novo Exame</span>
    </div>

      

    </div>


  );

}

export default Exames;