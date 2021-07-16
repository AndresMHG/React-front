import React, { Component } from 'react';
import './style/Atestados.css'

class Atestados extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:null,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }

    handleSubmit(event) {
        alert('Formulario enviado' + this.state.value);
    }


    render(){
        return(
            <div className="container-atestados pl-2 pt-4">
                <div className="row mx-0 pl-3 pb-3">
                    <h5 >Atestados</h5>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-group row mx-0">
                        <div className="col-4 input-group-prepend">
                            <select className="custom-select">
                                <option>Consulta</option>
                                <option>Dias</option>
                                <option>Livre</option>
                            </select>
                        </div>
                    </div>

                    <div className="row  mx-0 pt-3">
                        <div className="col">
                            <textarea 
                                type="text"
                                name="value" 
                                onChange={this.handleChange}
                                cols="20" 
                                rows="5" 
                                className="form-control" 
                                placeholder="Histórico familiar" 
                            />
                        </div>
                    </div>

                    <div className="row  mx-0 pt-4">
                        <div className="col-6 ">
                            <div className="form-check ">
                                    <input type="checkbox" className="form-check-input __style-checkbox" id="exampleCheck1" />
                                    <label className="form-check-label" >Check me out</label>
                            </div>
                        </div>
                        <div className="col text-right ">
                            <button  className="btn btn-primary mr-4 px-5">Salvar</button>
                            <button className="btn button-lightt px-5">Imprimir</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default Atestados;
