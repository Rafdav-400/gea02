import { useEffect, useState } from 'react';
import Error from './Error'
import { generarId } from '../helpers/generarID';

const Formulario = ({paciente,setPaciente,cliente,setCliente}) => {
  
  const [propietario, setPropietario] = useState('');
  const [mascota, setMascota] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [info, setInfo] = useState('');
  const [error, setError] = useState(false)
  
  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
      {/*console.log(cliente)*/}
      setPropietario(cliente.propietario)
      setMascota(cliente.mascota)
      setEmail(cliente.email)
      setDate(cliente.date)
      setTime(cliente.time)
      setInfo(cliente.info)
    }
  }, [cliente])
  

  const onSubmit = (e) => {
    e.preventDefault()
    //TODO:Validación del formulario
    if ([propietario,mascota,email,date,time,info].includes('')) {
      setError(true)
      return
    }
    //TODO:Almacenar los datos antes de que se borren
    const objetoPaciente = {
      propietario,
      mascota,
      email,
      date,
      time,
      info,
    }
    if (cliente.id) {
      {/*console.log("Editando")*/}
      objetoPaciente.id = cliente.id
      console.log(objetoPaciente)
      console.log(cliente)
      const pacienteActualizado = paciente.map(pacState => (
        pacState.id === cliente.id ? objetoPaciente : pacState
      ))
      setPaciente(pacienteActualizado)
      setCliente({})
    } else {
      {/*console.log("Nuevo Registro")*/}
      objetoPaciente.id = generarId();
      setPaciente([...paciente, objetoPaciente])
    }
    setError(false)
    setPropietario('')
    setMascota('')
    setEmail('')
    setDate('')
    setTime('')
    setInfo('')
  }

  const onChangePropietario = (e) => {
    setPropietario(e.target.value);
  } 
  const onChangeNombre = (e) => {
    setMascota(e.target.value);
  } 
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  } 
  const onChangeFecha = (e) => {
    setDate(e.target.value);
  } 
  const onChangeHora = (e) => {
    setTime(e.target.value);
  } 
  const onChangeInfo = (e) => {
    setInfo(e.target.value);
  } 

  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-center text-3xl'>
        Seguimiento Pacientes
      </h2>
      <p className='text-center mt-1 mb-10'>
        Añade Pacientes y {''} 
        <span className='text-indigo-600 font-bold text-lg'>Adminístralos</span>
      </p>
    {
      error && <Error />
    }
      <form 
        onSubmit={onSubmit}
        className='bg-white shadow-xl rounded-lg py-10 px-5'>
        <div>
            <label 
                className='block text-gray-700 uppercase'
                htmlFor="propietario"
            >Nombre del propietario</label>
            <input 
              value={propietario}
              onChange={onChangePropietario}
              type="text" 
              id='propietario'
              placeholder='Ej: Juan Mena Chávez'
              className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' 
            />
        </div>
        <div className='mt-5'>
            <label 
                className='block text-gray-700 uppercase'
                htmlFor="mascota"
            >Nombre de la mascota</label>
            <input 
              value={mascota}
              onChange={onChangeNombre}
              type="text" 
              id='mascota'
              placeholder='Ej: Ludovica'
              className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' 
            />
        </div>
        <div className='mt-5'>
            <label 
                className='block text-gray-700 uppercase'
                htmlFor="email"
            >Email</label>
            <input 
              value={email}
              onChange={onChangeEmail}
              type="email" 
              id='email'
              placeholder='Ej: juan-mena165465@jojojo.com'
              className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' 
            />
        </div>
        <div className='mt-5'>
            <label 
                className='block text-gray-700 uppercase'
                htmlFor="date"
            >Fecha de ingreso</label>
            <input 
              value={date}
              onChange={onChangeFecha}
              type="date" 
              id='date'
              className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' 
            />
        </div>
        <div className='mt-5'>
            <label 
                className='block text-gray-700 uppercase'
                htmlFor="time"
            >Hora de ingreso</label>
            <input 
              value={time}
              onChange={onChangeHora}
              type="time" 
              id='time'
              className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' 
            />
        </div>
        <div className='mt-5'>
            <label 
                className='block text-gray-700 uppercase'
                htmlFor="info"
            >Información</label>
            <textarea 
              value={info}
              onChange={onChangeInfo}
              id='info'
              className='border-2 w-full p-2 mt-2 placeholder:text-gray-400 rounded-md' 
            />
        </div>
        <div>
            <input 
              type="submit" 
              value={cliente.id ? "Editar Datos" : "Agregar Datos"}
              className='mt-5 bg-indigo-800 text-white p-5 w-full rounded-md text-2xl font-bold uppercase shadow-md' 
              />
        </div>
      </form>

    </div>
  )
}

export default Formulario