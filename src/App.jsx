import React, { useState } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {
  const [paciente, setPaciente] = useState([])
  const [cliente, setCliente] = useState({})

  const eliminarPaciente = id => {
    const pacienteActualizado = paciente.filter(cliente => cliente.id !== id)
    setPaciente(pacienteActualizado)
  }
  return (
    <div className='container mx-auto mt-20'>

        <Header />
        <div className='mt-10 md:flex'>
          <Formulario 
            paciente={paciente}
            setPaciente={setPaciente}
            cliente={cliente}
            setCliente={setCliente}
          />
          <ListadoPacientes 
            paciente={paciente}
            setCliente={setCliente}
            eliminarPaciente={eliminarPaciente}
          />
        </div>

    </div>

  )
}

export default App;