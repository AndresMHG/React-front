import React, { Component } from 'react';

class PresetsExame extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value:null
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }
    
    handleSubmit(event) {
        alert('Data send: ' + this.state.value);
    }

    render(){
        return(
        <div className="container-preset mt-3">
            <form onSubmit={this.handleSubmit}>
                    <div className="form-row m-3">
                        <div className="col">
                            <select className="custom-select mr-sm-2">
                                <option>Prescrição</option>
                                <option>Exames</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Nomes" />
                        </div>
                        <div className="col text-center">
                            <button className="btn btn-primary __btn">Salvar</button>
                        </div>
                    </div>
                    <div className="form-row m-3">
                        <div className="col">
                            <select className="custom-select mr-sm-2">
                                <option>Exame 1</option>
                                <option>Exame 2</option>
                            </select>
                        </div>
                    </div>
            </form>
        </div>

        );
        
    }
}

export default PresetsExame;
