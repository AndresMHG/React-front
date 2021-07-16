import React, { Component } from 'react';
import './style/Historico.css'

class Historico extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cep:null,
            municipio:null,
            uf:null,
            longradouro:null,
            numero:null,
            complemento:null,
            prefissao:null,
            pesoKg:null,
            alturaCm:null,
            alcool:null,
            tabaco:null,
            sangue:null,
            fisico:null,
            exames:null,
            substanciaPsicoativa:null,
            condicoes:null,
            procedimentos:null,
            medicamentos:null,
            historicoFamiliar:null
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
        alert('Formulario enviado');
        console.log(this.state)
    }

    render(){
        return(
            <div className="container-historico pt-4 pl-2">
                <div className="row mx-0 pl-3">
                    <h5 >Histórico</h5>
                 </div>
                <form onSubmit={this.handleSubmit} className="pt-3">
                    <div className="row mx-0">
                        <div className="col">
                            <input 
                                type="number" 
                                name="cep"
                                onChange={this.handleChange} 
                                className="form-control" 
                                placeholder="CEP(0000-000)" 
                            />
                        </div>
                        <div className="col">
                            <input type="text" name="municipio" onChange={this.handleChange} className="form-control" placeholder="Municipio" />
                        </div>
                        <div className="col">
                            <input type="text" name="uf" onChange={this.handleChange} className="form-control" placeholder="UF" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <input type="text" name="longradouro" onChange={this.handleChange} className="form-control" placeholder="Longradouro" />
                        </div>
                        <div className="col">
                            <input type="number" name="numero" onChange={this.handleChange} className="form-control" placeholder="Número" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <input type="text" name="complemento" onChange={this.handleChange} className="form-control" placeholder="Complemento" />
                        </div>
                        <div className="col">
                            <input type="text" name="prefissao" onChange={this.handleChange} className="form-control" placeholder="Profissão" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <input type="number" name="pesoKg" onChange={this.handleChange}  className="form-control" placeholder="Peso (KG)" />
                        </div>
                        <div className="col">
                            <input type="number" name="alturaCm" onChange={this.handleChange} className="form-control" placeholder="Altura (CM)" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <input type="text" name="alcool" onChange={this.handleChange} className="form-control" placeholder="Alcool" />
                        </div>
                        <div className="col pt-3">
                            <input type="text" name="tabaco" onChange={this.handleChange} className="form-control" placeholder="Tabaco" />
                        </div>
                    </div>

                    <div className="row mx-0  pt-3">
                        <div className="col">
                            <input type="text" name="sangue" onChange={this.handleChange} className="form-control" placeholder="Sangue" />
                        </div>
                        <div className="col">
                            <input type="text" name="fisico" onChange={this.handleChange} className="form-control" placeholder="Exercício Físico" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <input type="text" name="exames" onChange={this.handleChange} className="form-control" placeholder="Exames" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <textarea type="text" name="prefissao" onChange={this.handleChange} className="__textarea form-control" placeholder="Uso de substância psicoativa?" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <textarea type="text" name="condicoes" onChange={this.handleChange} className="__textarea form-control" placeholder="Condições diagnosticadas" />
                        </div>
                    </div>

                    <div className="row mx-0 pt-3">
                        <div className="col">
                            <textarea type="text" name="procedimentos" onChange={this.handleChange} className="__textarea form-control" placeholder="Procedimentos cirúrgicos" />
                        </div>
                    </div>

                    <div className="row  mx-0 pt-3">
                        <div className="col">
                            <textarea type="text" name="medicamentos" onChange={this.handleChange} className="__textarea form-control" placeholder="Medicamentos em uso" />
                        </div>
                    </div>

                    <div className="row  mx-0 pt-3">
                        <div className="col">
                            <textarea type="text" name="historicoFamiliar" onChange={this.handleChange} className="form-control __textarea" placeholder="Hisórico familiar" />
                        </div>
                    </div>
                    <div className="row mx-0 pt-4 pb-4">
                        <div className="col" 
                            style={{display: "flex", justifyContent: 'flex-end', alignItems: 'center'}}>
                            <button value="Submit" type="submit" className="btn btn-primary mr-4 px-5">Salvar</button>
                            <button type="button" className="btn button-lightt px-5">Imprimir</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Historico;
