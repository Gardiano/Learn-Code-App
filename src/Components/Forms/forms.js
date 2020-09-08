
import React, {Component} from 'react';
import '../Forms/forms.css';

export default class Form extends Component {
    constructor(props) {
        super(props);  
        this.state = {
            nome: String,
            sobrenome: String,
            email: String,
            password: String
        }        
        this.verify = this.verify.bind(this);
    }

verify() {
    const {nome, sobrenome, email, password} = this.state;
    if(nome.length, sobrenome.length, email.length, password.length <=4 ) {
        alert(' Email ou senha inválidos ');
    } else if (nome == '') {
        alert(' nome invalido! (Mínimo 4 caracteres) ')
    }
    else if (sobrenome == '') {
        alert('sobrenome invalido! (Mínimo 4 caracteres) ')
    }
    else if (email == '') {
        alert('email invalido, (informe um E-mail válido) ')        
    }
    else if (nome == '') {
        alert(' senha invalido! (Mínimo 4 caracteres) ')
    } else {
        alert(' dados enviados com sucesso! verifique seu Email: ')
       
    }
}

    render() {       
        return(
        <main className="main-box">
            <div className="form-box">                          
                <div className="form-content">
                <button id="free-test">
                    <label>
                    Teste por 7 dias e então
                    </label> &nbsp;
                    <p>  R$ 20,00/mês </p>
                </button>  
                    <form>
                        <input type="text" 
                        value={this.state.nome} 
                        placeholder="
                        Nome" autoFocus
                        onChange={(e) => this.setState({nome: e.target.value})}
                        />

                        <input type="text" 
                        value={this.state.sobrenome} 
                        placeholder=" Sobrenome"  
                        onChange={(e) => this.setState({sobrenome: e.target.value})}
                        />

                        <input type="email" 
                        value={this.state.email} 
                        placeholder=" E-mail"
                        required
                        onChange={(e) => this.setState({email: e.target.value})}
                        />

                        <input type="password" 
                        value={this.state.password} 
                        placeholder=" Senha"  
                        onChange={(e) => this.setState({password: e.target.value})}
                        />

                        <button onClick={() => this.verify}>                                                     
                            Reivindique sua avaliação gratuita
                        </button>
                        
                        <label>                            
                            Ao clicar no botão, você concorda com nossos
                        </label>
                        <p>
                            Termos e serviços
                        </p>   
                    </form>
                </div>
            </div>                    
        </main>
        );
    }
}