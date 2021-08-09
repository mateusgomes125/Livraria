import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

const Cadastrar = ({ editar, inserir, objeto }) => {
  const [livro, setLivro] = useState({
    id: objeto.id,
    titulo: objeto.titulo,
    autor: objeto.autor,
    ano: objeto.ano
  })
  const [redirecionar, setRedirecionar] = useState(false)

  const cadastrar = e => {
    e.preventDefault()

    if (editar) {
      editar(livro)
    } else {
      inserir(livro)
    }

    setRedirecionar(!redirecionar)
  }

  return (
    <>
      { redirecionar && <Redirect to= "/" /> }

      <div style={{ padding: '20px' }}>
        {editar && <h2>Edição de Livro</h2> || <h2>Cadastro de Livro</h2>}

        <form id="formulario" onSubmit={cadastrar}>
          <div className="form-group">
            <label for="txtId">ID</label>
            <input type="number" className="form-control" id="txtId"
              defaultValue={livro.id}
              value={livro.id}
              readOnly/>
          </div>

          <div className="form-group">
            <label for="txtTitulo">Título</label>
            <input type="text" className="form-control" id="txtTitulo"
              placeholder="Informe o título"
              defaultValue={livro.titulo}
              value={livro.titulo}
              required
              onChange={
                e => setLivro({...livro, titulo : e.target.value})
              }
            />
          </div>

          <div className="form-group">
            <label for="txtAutor">Autor</label>
            <input type="text" className="form-control" id="txtAutor"
              placeholder="Informe o autor"
              required
              defaultValue={livro.autor}
              value={livro.autor}
              onChange={
                e => setLivro({...livro, autor : e.target.value})
              }
            />
          </div>

          <div className="form-group">
            <label for="txtAno">Ano</label>
            <input type="number" className="form-control" id="txtAno"
              placeholder="Informe o ano"
              required
              defaultValue={livro.ano}
              value={livro.ano}
              onChange={
                e => setLivro({...livro, ano : e.target.value})
              }
            />
          </div>

          <button type="submit" className="btn btn-success">
            Salvar <i className="bi bi-save"></i>
          </button>
        </form>
      </div>
    </>
  )
}

export default Cadastrar
