import Paciente from './Paciente'

const ListadoPacientes = ({paciente,setCliente,eliminarPaciente}) => {
  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll'>
        {/* Hay pacientes o no hay pacientes */}
        {
          paciente && paciente.length ? (
            <>
            <h2 className='font-black text-center text-3xl'>Listado de Pacientes</h2>
            <p className='text-center mt-1 mb-10'>
              Administra tus {' '} 
            <span className='text-indigo-600 font-bold text-lg'>Pacientes y Citas</span>
            </p>
    {
      paciente.map(pac => (
        <Paciente 
          pac={pac}
          key={pac.id}
          setCliente={setCliente}
          eliminarPaciente={eliminarPaciente}
        />
      ))
    }
    </>
          ) : (
            <>
              <h2 className='font-black text-center text-3xl'>No hay pacientes</h2>
              <p className='text-center mt-1 mb-10'>
                Comienza a agregar pacientes {' '} 
              <span className='text-indigo-600 font-bold text-lg'>y apareceran en este lugar</span>
              </p>
            </>
          )
        }
        
    </div>
  )
}

export default ListadoPacientes