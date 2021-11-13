import React, { Component } from "react";
import "./style.css"
class FormularioCadastro extends Component {
  constructor(){
    super();
    this.titulo = "";
    this.texto = "";
  }
  handleMudancaTitulo(evento){
    evento.preventDefault();
    this.titulo = evento.target.value;
  }
  handleMudancaTexto(evento){
    evento.preventDefault();
    this.texto = evento.target.value;
  }
  criarNota(evento){
    evento.preventDefault();
    console.log(`Uma nova nota foi cria ${this.titulo} ${this.texto}`)
  }
  render() {
    return (
      <form className="form-cadastro" onSubmit={}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange = {this}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}
export default FormularioCadastro;
