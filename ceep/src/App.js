import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import ArrayDeNotas from "./data/Notas";
import Categorias from "./data/Categorias";
class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
  }
  // criarNota(titulo,texto, categoria){
  //   const novaNota = {
  //     titulo,texto,categoria
  //   };
  //   const novoArrayNotas=[...this.state.notas,novaNota];
  //   const novoEstado = {
  //     notas:novoArrayNotas
  //   };
  //   this.setState(novoEstado);
  // }
  // deletarNota(index){
  //   let novoAray = this.state.notas;
  //   novoAray.splice(index,1);
  //   this.setState({notas: novoAray});
  // }
  // adicionarCategoria(nomeCategoria){
  //   const novaArrayCategorias = [...this.state.categorias, nomeCategoria];
  //   const novoEstado = {...this.state, categorias: novaArrayCategorias};
  //   this.setState(novoEstado)
  // }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.criarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            adicionarCategoria={this.categorias.adicionarCategoria.bind(this.categorias)}
            categorias={this.categorias}
          />
          <ListaDeNotas
            notas={this.notas}
            deletarNota={this.notas.deletarNota.bind(this.notas)}
          />
        </main>
      </section>
    );
  }
}

export default App;
