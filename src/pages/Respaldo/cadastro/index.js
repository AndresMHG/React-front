import { Component } from 'react';
/* import { Modal } from '@material-ui/core'; */
import './style/style.css';
/* import OutputModal from "../../components/modal/Modal" */
const validate = values => {
    const errors = {}
    if(!values.name) {
        errors.name = 'Nome obrigatório'
    }
    if(!values.cpf) {
        errors.cpf = 'CPF obrigatório'
    }
    if(!values.email) {
        errors.email = 'Email obrigatório'
    }
    if(!values.password) {
        errors.password = 'Password obrigatório'
    }
    console.log(values)
    return errors
}

class Cadastro extends Component {
    constructor(props) {
        super(props);
        // Não chame this.setState() aqui!
        this.state = {
            errors: {}
        };
        this.changeForm = this.changeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount(){
        /* if (typeof this.props.location.registerProps !== 'undefined') {
            var RegisterType = this.props.location.registerProps.formType;
        }else{
            RegisterType = "Professional"
        } */

        var RegisterType = "Professional"
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
        alert('Formulário Enviado, checar console');

        if(this.state.password !== this.state.confPassword){
            this.setState({
                isModalVisible: true
            });
        }

        console.log(this.state)

        /* console.log("name: " + this.state.name)
        console.log("cpf: " + this.state.cpf)
        console.log("email: " + this.state.email)
        console.log("birthDate: " + this.state.birthDate)
        console.log("inscription: " + this.state.inscription)
        console.log("cep: " + this.state.cep)
        console.log("uf: " + this.state.uf)
        console.log("adress: " + this.state.adress)
        console.log("neighborhood: " + this.state.neighborhood)
        console.log("number: " + this.state.number)
        console.log("password: " + this.state.password)
        console.log("confPassword: " + this.state.confPassword) */

        event.preventDefault();

        const { errors, ...sinErros } = this.state
        const result = validate(sinErros)

        this.setState({ errors: result })
        if(!Object.keys(result).length) {
            console.log("Formulario valido")
        }
    }
   
    render() {
        /* const {isModalVisible} = this.state; */
        var text = "Website Terms and Conditions of Use\n1. Terms\nBy accessing this Website, accessible from Website.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.\n\n2. Use License\nPermission is granted to temporarily download one copy of the materials on Company Name's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\nmodify or copy the materials;\nuse the materials for any commercial purpose or for any public display;\nattempt to reverse engineer any software contained on Company Name's Website;\nremove any copyright or other proprietary notations from the materials;\nor transferring the materials to another person or 'mirror' the materials on any other server.\nThis will let Company Name to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format\n\n3. Disclaimer\nAll the materials on Company Name's Website are provided “as is”. Company Name makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, Company Name does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.\n\n4. Limitations\nCompany Name or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on Company Name's Website, even if Company Name or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.\n\n5. Revisions and Errata\nThe materials appearing on Company Name's Website may include technical, typographical, or photographic errors. Company Name will not promise that any of the materials in this Website are accurate, complete, or current. Company Name may change the materials contained on its Website at any time without notice. Company Name does not make any commitment to update the materials.\n\n6. Links\nCompany Name has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by Company Name of the site. The use of any linked website is at the user's own risk.\n\n7. Site Terms of Use Modifications\nCompany Name may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.\n\n8. Governing Law\nAny claim related to Company Name's Website shall be governed by the laws of Country without regards to its conflict of law provisions."
        const { errors } = this.state
        return (
            
            <div className="container-cadastro pt-2 pl-2">
                {/* <Modal
                    open={true}
                    // onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                </Modal> */}
                {/* <Modal open={isModalVisible}>
                    <OutputModal 
                        // isSuccess = {true}
                        isError = {true}
                        title = {"ERRO!"}
                        subtitle = {"O campo senha e o campo confirmar a senha devem ser iguais"}
                    />

                    
                </Modal> */}

                <div className="row mx-0 ">
                    <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ">
                        <h2 className="title text-center ">Cadastro</h2>
                    </div>
                </div>
                <div className="row mx-0 ">
                    <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                        <label className="subtitle-cadastro">Selecione o tipo de cadastro</label>
                        <select className="custom-select color" onChange={this.changeForm} value={this.state.starterRegisterType} >
                            <option value="Professional">Profissional de Saude</option>
                            <option value="Patient">Paciente</option>
                            <option value="Comertial">Comercio</option>
                        </select>
                    </div>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div style={{display: this.state.starterRegisterType === "Professional" ? 'block' : 'none'}}>                   
                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className={ errors.name ? 'form-control is-invalid' : 'form-control' } placeholder="Nome Completo" name="name" onChange={this.handleInputChange}></input>
                                {  errors.name &&   <div id="validationServer03Feedback" class="invalid-feedback"> { errors.name } </div> }
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className={ errors.cpf ? 'form-control is-invalid' : 'form-control' } placeholder="CPF" name="cpf" onChange={this.handleInputChange}></input>
                                {  errors.cpf &&   <div id="validationServer03Feedback" class="invalid-feedback"> { errors.cpf } </div> }
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <select className="custom-select" aria-label="Selecione sua área de especialidade">
                                    <option>Dentista</option>
                                    <option>Farmaceutico</option>
                                    <option>Fisioterapeuta</option>
                                    <option>Fonoaudiólogo</option>
                                    <option>Médico</option>
                                    <option>Nutricionista</option>
                                    <option>Psicológo</option>
                                    <option>Terapeuta Ocupacional</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="email" className={ errors.email ? 'form-control is-invalid' : 'form-control' } placeholder="E-mail" name="email" onChange={this.handleInputChange}></input>
                                {  errors.email &&   <div id="validationServer03Feedback" class="invalid-feedback"> { errors.email } </div> }
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="date" className="form-control" placeholder="Data de Nascimento" name="birthDate" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Inscrição Conselho" name="inscription" onChange={this.handleInputChange}></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="CEP" name="cep" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="UF" name="uf" onChange={this.handleInputChange}></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Endereço" name="adress" onChange={this.handleInputChange}></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Bairro" name="neighborhood" onChange={this.handleInputChange}></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Numero" name="number" onChange={this.handleInputChange}></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="password" className={ errors.name ? 'form-control is-invalid' : 'form-control' } placeholder="Senha" name="password" onChange={this.handleInputChange}></input>
                                {  errors.password &&   <div id="validationServer03Feedback" class="invalid-feedback"> { errors.password } </div> }
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="password" className={ errors.name ? 'form-control is-invalid' : 'form-control' } placeholder="Confirmar Senha" name="confPassword" onChange={this.handleInputChange}></input>
                                {  errors.password &&   <div id="validationServer03Feedback" class="invalid-feedback"> { errors.password } </div> }
                            </div>
                        </div>

                    </div>
                    <div style={{display: this.state.starterRegisterType === "Patient" ? 'block' : 'none'}}>
                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text"  className="form-control" placeholder="Nome Completo"></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="CPF"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <select className="form-control">
                                    <option>Selecione sua área de especialidade</option>
                                    <option>Dentista</option>
                                    <option>Farmaceutico</option>
                                    <option>Fisioterapeuta</option>
                                    <option>Fonoaudiólogo</option>
                                    <option>Médico</option>
                                    <option>Nutricionista</option>
                                    <option>Psicológo</option>
                                    <option>Terapeuta Ocupacional</option>
                                    <option>Outro</option>
                                </select>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="email"  className="form-control" placeholder="E-mail"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="CEP"></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="UF"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Endereço"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Bairro"></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Numero"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="password" className="form-control" placeholder="Senha"></input>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="password" className="form-control" placeholder="Confirmar Senha"></input>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{display: this.state.starterRegisterType === "Comertial" ? 'block' : 'none'}}>
                        <div className="row mx-0">
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Razão Social"></input>
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="CNPJ"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="email" className="form-control" placeholder="E-mail"></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Telefone"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="CEP"></input>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Bairro"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Endereço"></input>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                                <input type="text" className="form-control" placeholder="Número"></input>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <textarea className="form-control" placeholder="Descrição do Comércio" >                        
                                </textarea>
                            </div>
                        </div>

                        <div className="row mx-0">
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="password" className="form-control" placeholder="Senha"></input>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <input type="password" className="form-control" placeholder="Confirmar Senha"></input>
                            </div>
                        </div>

                    </div>

                    <div className="formBox">
                        <div className="row mx-0">
                            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                <textarea defaultValue={text} className="form-control" cols="40" rows="15" disabled>                        
                                </textarea>
                            </div>
                        </div>

                        <div className="row mx-0 pl-4 pt-2">
                            <div className="col-6 mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label">Aceito os termos de serviço</label>
                            </div>
                        </div>
                        <div className="row mx-0 pb-4 pt-2">
                            <div className="col">
                            <button type="onSubmit" className="btn btn-primary btn-block">Salvar</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

          );
    }
  
}

export default Cadastro;
