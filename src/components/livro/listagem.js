import React from 'react'
import { Link } from 'react-router-dom'

const Listagem = ({ listaObjetos}) => {
  return (
    <div>
      <h1 align = "center">Meus Livros</h1>
      <Link className="btn btn-outline-dark" to="/livro">
        Área administrativa 
      </Link>
      { listaObjetos.length === 0 && <h1>Nenhum livro encontrado</h1> }

      { listaObjetos.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Titulo</th>
              <th scope="col">Autor</th>
              <th scope="col">Ano</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            { listaObjetos.map(objeto => (
              <tr key={objeto.id}>
                <td>{objeto.id}</td>
                <td>{objeto.titulo}</td>
                <td>{objeto.autor}</td>
                <td>{objeto.ano}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default Listagem
