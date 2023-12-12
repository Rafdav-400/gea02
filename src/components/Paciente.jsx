import React from 'react'

const Paciente = ({pac,setCliente,eliminarPaciente}) => {
  const {id,propietario,mascota,email,date,time,info} = pac
  const handleEliminar = () => {
    const respuesta = confirm("¿Deseas eliminar el paciente?")
    if (respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <>
      <div className='mt-5 bg-white shadow-md px-5 pb-10 pt-5 mx-5 rounded-lg uppercase font-black'>
        <div className='flex justify-between mb-4'>
      <button 
        type='button'
        className='text-white bg-indigo-500 border rounded-md font-bold text-lg uppercase px-2 py-1'
        onClick={() => setCliente(pac)}
        >Editar</button>
      <button 
        onClick={handleEliminar}
        type='button'
        className='text-white bg-red-700 border rounded-md font-bold text-2xl px-2'
      >X</button>
    </div>
        <p>
          Id: {''}
          <span className='normal-case font-normal'>{id}</span>
        </p>
        <p>
          Nombre del dueño: {''}
          <span className='normal-case font-normal'>{propietario}</span>
        </p>
        <p>
          Nombre de la mascota:  {''}
        <span className='normal-case font-normal'>{mascota}</span>
        </p>
        <p>
          Email: {''}
          <span className='normal-case font-normal'>{email}</span> 
        </p>
        <p>
          Fecha de ingreso:  {''}
          <span className='normal-case font-normal'>{date}</span> 
        </p>
        <p>
          Hora: {''}
          <span className='normal-case font-normal'>{time}</span>
        </p>
        <p>
          Info: {''}
          <span className='normal-case font-normal'>{info}</span>
        </p>
      </div>
    </>
  )
}

export default Paciente