import React, { Component } from "react";
import CardNota from "../CardNota";
import "./style.css"
class ListaDeNotas extends Component {
  render() {
    return (
      <ul className="lista-notas">
        {Array.of('Trabalho', 'Estudo','Trabalho').map((categoria,index) => (
          <li className="lista-notas_item" key={index}>
            <CardNota/>
          </li>
        ))}
      </ul>
    );
  }
}
export default ListaDeNotas;