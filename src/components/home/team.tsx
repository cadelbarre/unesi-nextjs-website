import Container from '../share/container'
import Title from '../share/title'

// https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80

export default function Team (): JSX.Element {
  return (
    <Container className='py-16 md:py-24 grid place-items-center'>
      <header className='mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
        <Title>Nuestros Medicos</Title>
        <p className='text-lg mt-2'>Los mejores de su área para ofrecer siempre lo mejor</p>
      </header>

      <section className='mt-10 md:mt-20'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16'>
          <li className='flex flex-col md:flex-row gap-6 border tranlate-y-0 border-gray-50 hover:cursor hover:md:shadow-lg hover:-translate-y-2 transition duration-500 ease-in-out p-0 md:p-5 rounded-lg '>
            <img
              src='/doctor_jairo_fernandez.webp'
              alt='avatar doctor'
              className='rounded-lg w-full md:w-52 aspect-square sm:aspect-[4/5] object-cover object-center'
              loading='lazy'
            />
            <div className='flex-auto'>
              <header>
                <h4 className='font-bold text-2xl'>Doctor Jairo Fernandez</h4>
                <p className='m-0 italic text-primary'>Neurocirugiaendovascular</p>
              </header>
              <div>
                <p>Médico Cirujano por la Universidad Libre de Barranquilla y especialista en Neurocirugía.</p>
                <p>Amplia experiencia y trayectoria de más 20 años con más de 7.000 tratamientos endovasculares realizadados en el área de HEMODINAMIA.</p>
              </div>
            </div>
          </li>

          <li className='flex flex-col md:flex-row gap-6 border tranlate-y-0 border-gray-50 hover:cursor hover:md:shadow-lg hover:-translate-y-2 transition duration-500 ease-in-out p-0 md:p-5  rounded-lg '>
            <img
              src='/images/default-avatar.webp'
              alt='avatar doctor'
              className='rounded-lg w-full md:w-52 aspect-square sm:aspect-[4/5] object-cover opacity-40'
              loading='lazy'
            />
            <div className='flex-auto'>
              <header>
                <h4 className='font-bold text-2xl'>Doctor Jairo Fernandez</h4>
                <p className='m-0 italic text-primary'>Neurocirugiaendovascular</p>
              </header>
              <p>
                Quia illum aut in beatae. Possimus dolores aliquid accusantium aut in ut non assumenda. Enim iusto molestias aut deleniti eos aliquid magnam molestiae. At et non possimus ab. Magni labore molestiae nulla qui.
              </p>
            </div>
          </li>

        </ul>
      </section>
    </Container>
  )
}
