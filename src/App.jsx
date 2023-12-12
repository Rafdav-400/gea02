import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoPacientes from './components/ListadoPacientes';

const App = () => {
  const [paciente, setPaciente] = useState([])
  const [cliente, setCliente] = useState({})

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem("paciente")) ?? []
      setPaciente(pacientesLS)
    }
    obtenerLS()
  }, [])

  useEffect(() => {
    {/*console.log("Componente listo o cambió pacientes")*/}
    localStorage.setItem("paciente",JSON.stringify(paciente))
  }, [paciente])

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