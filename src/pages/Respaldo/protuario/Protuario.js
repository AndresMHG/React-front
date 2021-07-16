import React, { Component } from 'react'
import './style/Protuario.css'

class Protuario extends Component{
    constructor(props){
        super(props);
        this.state = {
            tags:null,
            textFormulario1:null,
            textFormulario2:null, 

        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
        alert('Formulario enviado');
        console.log(this.state)
    }

    render(){
        return(
            <div className="container-prontuario pt-4 pl-2">
                <div className="row mx-0 pl-3 pb-3">
                    <h5 >Prontuario</h5>
                </div>
                 <form className="" onSubmit={this.handleSubmit}>
                 <div className="row mx-0">
                        <div className="col-12">
                            <input 
                                type ="text" 
                                name ="tags" 
                                className="form-control mb-3" 
                                placeholder="+ Tags"
                                onChange={this.handleChange}
                            />
                        </div>  
                    </div>                    
                    <div className="row mx-0">
                        <div className="col-12">
                            <textarea className="form-control mb-3" name="textFormulario1" rows="5" onChange={this.handleChange}></textarea>
                        </div>
                    </div>
                    <div className="row mx-0">
                        <div className="col-12">
                        <textarea className="form-control" name="textFormulario2" rows="5" onChange={this.handleChange}></textarea>
                        </div>
                    </div>    
                    <div className="row mx-0 pt-4">
                        <div className="col" 
                            style={{display: "flex", justifyContent: 'flex-end', alignItems: 'center'}}>
                            <button className="btn btn-primary mr-4 px-5">
                                Salvar
                            </button>
                            <button className="btn button-lightt px-5">
                                Anexar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Protuario;
