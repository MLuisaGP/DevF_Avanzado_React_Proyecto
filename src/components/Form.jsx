import React, {  useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormInput from './FormInput';
import { registerSchema } from '../schemas/registerSchema';
import { ThemeContext } from '../context/ThemeContext';


export default function Form() {
  // const {theme}=useContext(ThemeContext);
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(registerSchema)
  })
  const [mensaje, setMensaje] = useState('');

  const onSubmit = () => {
    setMensaje('Usuario Guardado')
    reset(); //Limpia el formulario
  }
  useEffect(() => {
    if (!mensaje) return;
    console.log('mensaje');

    const intervaloMsn = setInterval(() => {
      setMensaje('')
    }, 2000)

    return () => {
      clearInterval(intervaloMsn)
    }
  }, [mensaje])

  // let DarkTheme = theme=='light' ? '':'dark:bg-gray-800'
  return (


    <form
      className="bg-white dark:bg-gray-700  p-6 rounded-2xl shadow-lg w-full max-w-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="text-2xl dark:text-white font-bold mb-4 text-gray-700 text-center">
        Registro de Usuario
      </h2>
      <FormInput nameInput='name' label='Nombre' register={register("name")} placeholder='Nombre' error={errors.name} />
      <FormInput nameInput='email' label='Correo electrónico' register={register("email")} placeholder='email@email.com' error={errors.email} />
      <FormInput nameInput='pwd' label='Contraseña' register={register("passwd")} placeholder='Contraseña' error={errors.passwd} type='password' />
      <FormInput nameInput='pwd2' label='Confirmar Contraseña' register={register("passwd_confirmed")} placeholder='Contraseña' error={errors.passwd_confirmed} type='password' />

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        Registrarse
      </button>
      {mensaje && <p className='text-sm text-center text-green-700 p-1'>{mensaje}</p>}
    </form>
  )
}
