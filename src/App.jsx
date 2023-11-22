import React, { useState } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {
  const [paciente, setPaciente] = useState([])
  return (
    <div className='container mx-auto mt-20'>

        <Header />
        <div className='mt-10 md:flex'>
          <Formulario 
            setPaciente={setPaciente}
          />
          <ListadoPacientes 
            paciente={paciente}
          />
        </div>

    </div>

  )
}

export default App;