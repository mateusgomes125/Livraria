import React, { createContext, useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [listaObjetos, setListaObjetos, removeListaObjetos] = useLocalStorage('@app: livros')
  const [codigo, setCodigo, removeCodigo] = useLocalStorage('@app: codigo')

  useEffect(() => {
    if (!listaObjetos) setListaObjetos([])
    if (!codigo) setCodigo(0)
  }, [listaObjetos, codigo])

  return (
    <AuthContext.Provider value={{
      listaObjetos,
      setListaObjetos,
      codigo,
      setCodigo
    }}>
      { children}
    </AuthContext.Provider>
  )
}


export default AuthContext
