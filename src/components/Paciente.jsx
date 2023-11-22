import React from 'react'

const Paciente = ({}) => {
  return (
    <>
      <div className='mt-5 bg-white shadow-md px-5 py-10 mx-5 rounded-lg uppercase font-black'>
        <p>
          Nombre del dueño: {''}
          <span className='normal-case font-normal'>Allison</span>
        </p>
        <p>
          Nombre de la mascota:  {''}
        <span className='normal-case font-normal'>Renji</span>
        </p>
        <p>
          Email: {''}
          <span className='normal-case font-normal'>loquesea@gmail.com</span> 
        </p>
        <p>
          Fecha de ingreso:  {''}
          <span className='normal-case font-normal'>1 de noviembre del 2023</span> 
        </p>
        <p>
          Hora: {''}
          <span className='normal-case font-normal'>13:15 </span>
        </p>
        <p>
          Info: {''}
          <span className='normal-case font-normal'>Solo come y solo duerme... Lorem ipsum 
          dolor sit amet consectetur adipisicing elit. Quibusdam dolores velit doloribus 
          cumque minima ratione dolore veritatis, quasi debitis quo aspernatur maxime, 
          ipsa magni quis aliquid et ullam? Non, placeat.</span>
        </p>
      </div>
    </>
  )
}

export default Paciente