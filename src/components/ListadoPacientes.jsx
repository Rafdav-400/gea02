import Paciente from './Paciente'

const ListadoPacientes = ({paciente}) => {

  return (
    <div className='md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll'>
        <h2 className='font-black text-center text-3xl'>Listado de Pacientes</h2>
      <p className='text-center mt-1 mb-10'>
        Administra tus {' '} 
        <span className='text-indigo-600 font-bold text-lg'>Pacientes y Citas</span>
      </p>
    {
      paciente.map(pac => (
        <Paciente />
      ))
    }
    </div>
  )
}

export default ListadoPacientes