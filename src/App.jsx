import { useState } from "react"

import Perfil from "./components/Perfil"
import Formulario from "./components/Formulario"
import ReposList from "./components/ReposList"

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('')

  return(
    <>
      <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

      {nomeUsuario.length > 4 && (
        <>
          <Perfil nomeUsuario={nomeUsuario} />
          <ReposList nomeUsuario={nomeUsuario} />
        </>
      )}

    
    {/* {formularioEstaVisivel && (
      <Formulario />
    )}
    <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toogle form</button> */}
    </>
  )
}

export default App


// function App() {
//   const nome = "Felipe"
  
//   function retornaNome() {
//     return nome
//   }

//   const pessoa = {
//     nome: "Maria"
//   }

//   let estaDeDia = false;

//   return(
//     <>
//     <Perfil/>
//     <h1>Olá, {pessoa.nome}</h1>
//     <h2>Subtitulo</h2>
//     {estaDeDia ? 'Bom dia!' : "Boa tarde!"}
//     </>
//   )
// }