'use client'
import { useState } from 'react'
import { toast } from 'sonner'
import { z } from 'zod'
import emailjs from '@emailjs/browser'

const formSchema = z.object({
  nombres: z.string().min(2, 'El nombre es requerido.').trim(),
  apellidos: z.string().min(2, 'El apellido es requerido').trim(),
  email: z.string().email('Correo invalido'),
  numeroContacto: z.string().length(10, 'Debe ser un número de celular. Sin espacios entre los numeros').trim(),
  mensaje: z.string().min(2, 'Se recomienda escribir algún detalle de tu solicitud').trim()
})

const INITIAL_VALUES = {
  nombres: '',
  apellidos: '',
  email: '',
  numeroContacto: '',
  mensaje: ''
}

export default function FormContac (): JSX.Element {
  const [fieldErrors, setFieldErrors] = useState(INITIAL_VALUES)
  const [isSubmiting, setIsSubmiting] = useState(false)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    setIsSubmiting(true)
    setFieldErrors(INITIAL_VALUES)

    const target = e.target as HTMLFormElement

    const formData = new FormData(target)
    const objectFormValue = Object.fromEntries(formData)

    const parsed = formSchema.safeParse(objectFormValue)

    if (!parsed.success) {
      const { fieldErrors: errors } = parsed.error.formErrors
      toast.error('Ha ocurrido un error. Por favor, revisar los campos.')

      for (const key in errors) {
        const newValue = errors[key as keyof typeof INITIAL_VALUES]?.[0]

        setFieldErrors(prevValue => {
          return { ...prevValue, [key]: newValue }
        })
      }
      setIsSubmiting(false)
      return
    }

    emailjs.send(
      String(process.env.NEXT_PUBLIC_SERVICE_ID),
      String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
      parsed.data,
      String(process.env.NEXT_PUBLIC_PUBLIC_KEY))
      .then(() => {
        toast.success('Mensaje enviado correctamente.')
        target.reset()
      }).catch((error) => {
        console.log({ error })
        toast.error('No se pudo enviar el correo. Intentalo nuevamente')
      }).finally(() => {
        setIsSubmiting(false)
      })
  }

  return (
    <fieldset className='mx-auto w-full col-span-2' disabled={isSubmiting}>
      <form onSubmit={onSubmit}>
        <div className='grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2'>
          <div>
            <label htmlFor='nombres' className='block text-base font-medium leading-6 text-gray-900'>Nombres <span className='text-red-500'>*</span></label>
            <div className='mt-2.5'>
              <input type='text' name='nombres' id='nombres' autoComplete='given-name' className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6' />
            </div>
            {
            fieldErrors.nombres.length > 0 &&
              <p className='mt-2 text-sm leading-6 text-red-600'>{fieldErrors.nombres}</p>
          }
          </div>

          <div>
            <label htmlFor='apellidos' className='block text-base font-medium leading-6 text-gray-900'>Apellidos <span className='text-red-500'>*</span></label>
            <div className='mt-2.5'>
              <input type='text' name='apellidos' id='apellidos' autoComplete='family-name' className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6' />
            </div>
            {
            fieldErrors.apellidos.length > 0 &&
              <p className='mt-2 text-sm leading-6 text-red-600'>{fieldErrors.apellidos}</p>
          }
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='email' className='block text-base font-medium leading-6 text-gray-900'>Correo Electrónico <span className='text-red-500'>*</span></label>
            <div className='mt-2.5'>
              <input type='email' name='email' id='email' autoComplete='email' className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6' />
            </div>
            {
            fieldErrors.email.length > 0 &&
              <p className='mt-2 text-sm leading-6 text-red-600'>{fieldErrors.email}</p>
          }
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='numeroContacto' className='block text-base font-medium leading-6 text-gray-900'>Número Celular <span className='text-red-500'>*</span></label>
            <div className='relative mt-2.5'>
              <input type='tel' name='numeroContacto' id='numeroContacto' autoComplete='tel' className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6' />
            </div>
            {
            fieldErrors.numeroContacto.length > 0 &&
              <p className='mt-2 text-sm leading-6 text-red-600'>{fieldErrors.numeroContacto}</p>
          }
          </div>

          <div className='sm:col-span-2'>
            <label htmlFor='mensaje' className='block text-base font-medium leading-6 text-gray-900'>Mensaje <span className='text-red-500'>*</span></label>
            <div className='mt-2.5'>
              <textarea name='mensaje' id='mensaje' rows={4} className='block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6' />
            </div>
            {
            fieldErrors.mensaje.length > 0 &&
              <p className='mt-2 text-sm leading-6 text-red-600'>{fieldErrors.mensaje}</p>
          }
          </div>

        </div>
        <div className='mt-10'>
          <button type='submit' className='block w-full rounded-md bg-primary px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-wait'>{
            isSubmiting
              ? (
                <div className='flex justify-center items-center'>
                  <svg className='animate-spin -ml-1 mr-3 h-5 w-5 text-white' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
                    <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
                    <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
                  </svg>
                  <span>Enviando mensaje...</span>
                </div>
                )
              : 'Enviar Mensaje'
          }
          </button>
        </div>
      </form>
    </fieldset>
  )
}
