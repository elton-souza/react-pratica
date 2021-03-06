class ArrayDeNotas{
    constructor(){
        this.notas = [];
        this._inscritos = [];
    }
    criarNota(titulo, texto, categoria){
        const novaNota = new Notas(titulo, texto, categoria);
        this.notas.push(novaNota)
        this.notificar()
    }
    deletarNota(index){
        this.notas.splice(index, 1)
        this.notificar()
    }
    inscrever(func){
        this._inscritos.push(func);
    }
    
    notificar(){
        this._inscritos.forEach(func => func(this.notas))
    }
    desinscrever(func){
        this._inscritos = this._inscritos.filter(f=> f!== func)
    }
}
class Notas{
    constructor(titulo, texto, categoria){
        this.titulo = titulo;
        this.texto = texto;
        this.categoria = categoria
    }
}

export default ArrayDeNotas;