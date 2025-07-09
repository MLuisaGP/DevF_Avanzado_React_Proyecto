import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from './FormInput';
import { registerSchema } from '../schemas/registerSchema';


export default function Form() {
  const {register, handleSubmit, formState:{errors},reset} = useForm({
    resolver:yupResolver(registerSchema)
  })
  const [mensaje, setMensaje] = useState('');

  const onSubmit = ()=>{
    setMensaje('Usuario Guardado')
    reset(); //Limpia el formulario
  }
  useEffect(()=>{
    if(!mensaje)return;
    console.log('mensaje');
    
    const intervaloMsn = setInterval(()=>{
      setMensaje('')
        },2000)
      
      return()=>{
        clearInterval(intervaloMsn)
      }
  },[mensaje])
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700 text-center">
          Registro de Usuario
        </h2>
        <FormInput nameInput='name' label='Nombre' register={register("name")} placeholder='Nombre' error={errors.name}/>
        <FormInput nameInput='email' label='Correo electrónico' register={register("email")} placeholder='email@email.com' error={errors.email}/>
        <FormInput nameInput='pwd' label='Contraseña' register={register("passwd")} placeholder='Contraseña' error={errors.passwd} type='password'/>
        <FormInput nameInput='pwd2' label='Confirmar Contraseña' register={register("passwd_confirmed")} placeholder='Contraseña' error={errors.passwd_confirmed} type='password'/>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Registrarse
        </button>
        {mensaje && <p className='text-sm text-center text-green-700 p-1'>{mensaje}</p>}
      </form>
    </div>
  )
}
