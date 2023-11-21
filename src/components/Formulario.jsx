import { useState } from 'react';

const Formulario = () => {

  const [propietario, setPropietario] = useState('');
  const [mascota, setMascota] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [info, setInfo] = useState('');
  
  const onClick = (e) => {
    e.preventDefault()
    console.log('Mandar form');
  }

  const onChangePropietario = (e) => {
    setPropietario(e.target.value);
    console.log(propietario);
  } 
  const onChangeNombre = (e) => {
    setMascota(e.target.value);
    console.log(mascota);
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

      <form className='bg-white shadow-xl rounded-lg py-10 px-5'>
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
            <button
            onClick={onClick}
            
            className='mt-5 bg-indigo-800 text-white p-5 w-full rounded-md text-2xl font-bold uppercase shadow-md' 
            >
                Agregar Datos
            </button>
        </div>
      </form>

    </div>
  )
}

export default Formulario