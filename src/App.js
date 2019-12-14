
import React, { Component } from 'react'; 
import { Tabela } from './styles';
import {Cadastro} from './styles';
import {Botao} from './styles';
import {Input} from './styles';

export default class CadastroUsuario extends Component {

  constructor() {
    super();
    this.state = {
      nome: "",
      telefone: "",
      email: "",
      pessoas: [
        {
          nome: "Marcos",
          email: "marcos@gmail.com",
          telefone: "21-9999-9999"
        },
        {
          nome: "Gustavo",
          email: "gustavo@hotmail.com",
          telefone: "21-9087-6542"
        }
      ]
    }; 
  }

  render() { 
    return (
      <>
        <form onSubmit={this.cadastrarUsuario}>

          <Cadastro
            id="input-nome"
            type="text"
            placeholder="Nome"
            value={this.state.nome}
            onChange={evento => { 
              this.setState({ nome: evento.target.value });
            }}
          />

          <Cadastro
            id="input-email"
            type="email"
            placeholder="E-mail"
            value={this.state.email}
            onChange={evento => { 
              this.setState({ email: evento.target.value });
            }}
          />

          <Cadastro
            id="input-tel"
            type="tel"
            placeholder="Telefone"
            value={this.state.telefone}
            onChange={evento => {
              this.setState({ telefone: evento.target.value });
            }}
          />

          <Input type="submit" />
        </form>



        <table>
          <tr>
            <Tabela>NOME</Tabela>
            <Tabela>E-MAIL</Tabela>
            <Tabela>TELEFONE</Tabela>
          </tr>

          

          {this.state.pessoas.map((pessoa, index) => (
            <tr key={index}>
              <Tabela>{pessoa.nome}</Tabela>
              <Tabela>{pessoa.email}</Tabela>
              <Tabela>{pessoa.telefone}</Tabela>
              <td><Botao onClick={() => this.removerUsuario(index)}>Remover</Botao></td>
            </tr>
          ))}

        </table>

      </>

    );
  }

  

 
  cadastrarUsuario = (evento) => {
    evento.preventDefault();
    this.setState({
      pessoas: [...this.state.pessoas, { nome: this.state.nome, email: this.state.email, telefone: this.state.telefone }], 
      nome: "",
      email: "",
      telefone: ""
    });
  }

  removerUsuario = (index) => {
    this.setState({
      pessoas: [...this.state.pessoas.slice(0, index), ...this.state.pessoas.slice(index + 1)]
    })
  }
}



