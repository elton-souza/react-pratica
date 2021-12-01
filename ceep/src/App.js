import React, { Component } from "react";
import ListaDeNotas  from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import "./assets/App.css"
import "./assets/index.css"
class App extends Component {
  constructor(){
    super();
    this.state={
      notas:[],
      categorias:[]
    };
  }
  criarNota(titulo,texto){
    const novaNota = {
      titulo,texto
    };
    const novoArrayNotas=[...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    };
    this.setState(novoEstado);
  }
  deletarNota(index){
    let novoAray = this.state.notas;
    novoAray.splice(index,1);
    this.setState({notas: novoAray});
  }
  adicionarCategoria(nomeCategoria){
    const novaArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {...this.state, categorias: novaArrayCategorias};
    this.setState(novoEstado)
  }
  render(){
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        <main className="conteudo-principal">
          <ListaDeCategorias adicionarCategoria={this.adicionarCategoria.bind(this)} categorias={this.state.categorias}/>
          <ListaDeNotas notas={this.state.notas} deletarNota={this.deletarNota.bind(this)}/>
        </main>
      </section>
    );
  }
}

export default App;
