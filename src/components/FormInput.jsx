import React from 'react'

export default function FormInput({nameInput, label, register, placeholder, error='',type='text'}) {
  return (
    <section className="block mb-2">
        <label htmlFor={nameInput} className="text-gray-600">{label}</label>
        <input type={type}  id={nameInput}
            {...register} placeholder={placeholder}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {error && <p className='text-xs italic text-red-700'>{error.message}</p> }
    </section>
  )
}
