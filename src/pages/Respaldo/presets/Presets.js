import React, { Component } from 'react';
import './style/Presets.css'

class Presets extends Component{
    constructor(props) {
        super(props);
        this.state = {
            nome:null,
            textarea:null
        };
        this.changeForm = this.changeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    componentDidMount(){
        /* if (typeof this.props.location.registerProps !== 'undefined') {
            var RegisterType = this.props.location.registerProps.formType;
        }else{
            RegisterType = "Presets"
        } */
        var RegisterType = "Presets"
        this.setState((state) => {
            return {starterRegisterType: RegisterType };
        });
    }

    changeForm(event){
        this.setState((state) => {
            return {starterRegisterType: event.target.value };
        });
    } 

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    
    handleSubmit(event) {
        alert('Data send: ' + this.state.textarea);
    }

    render(){
        return(
            
        <div className="container-preset pt-4 pl-2">
            <div className="row mx-0 pl-3 pb-3">
                <h5 >Presets</h5>
            </div>

            <div className="row mx-0">
                <div className="col">
                    <select className="custom-select mr-sm-2" onChange={this.changeForm} value={this.state.starterRegisterType} >
                        <option value="Presets">Presets</option>
                        <option value="Exames">Exames</option>
                    </select>
                </div>
            </div>

            <form onSubmit={this.handleSubmit} className="pt-3">
                {/*  Presets */}
                <div  style={{display: this.state.starterRegisterType === "Presets" ? 'block' : 'none'}}>
                    <div className="row mx-0 ">
                            <div className="col-6">
                                <input type="text" name="nome" onChange={this.handleInputChange} className="form-control" placeholder="Nomes" />
                            </div>
                            <div className="col-6 ">
                                <button  type="submit"  className="btn btn-block btn-primary __btn">Salvar</button>
                            </div>
                        </div>
                        <div className="row mx-0 pt-3">
                            <div className="col">
                                <textarea className="form-control" nome="textarea" name="value" onChange={this.handleInputChange} rows="5"></textarea>
                            </div>
                        </div>
                </div >
                {/*  Exames */}
                <div  style={{display: this.state.starterRegisterType === "Exames" ? 'block' : 'none'}}>
                    <div className="row mx-0 ">
                            <div className="col-6">
                                <input type="text" className="form-control" placeholder="Nomes" />
                            </div>
                            <div className="col-6 ">
                                <button  type="submit" className="btn btn-block btn-primary __btn">Salvar</button>
                            </div>
                        </div>
                        <div className="row mx-0 pt-3">
                            <div className="col">
                                <textarea className="form-control" name="value" onChange={this.handleChange} rows="5"></textarea>
                            </div>
                        </div>
                </div >
                    {/*  */}
            </form>
        </div>

        );
        
    }
}

export default Presets;
