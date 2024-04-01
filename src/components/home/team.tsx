import Container from '../share/container'
import Title from '../share/title'
import unesi from '@/assets/empresa'

export default function Team (): JSX.Element {
  const { medicos } = unesi
  return (
    <Container className='py-16 md:py-24 grid place-items-center'>
      <header className='mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
        <Title>Nuestros Medicos</Title>
        <p className='text-lg mt-2'>Los mejores de su área para ofrecer siempre lo mejor</p>
      </header>

      <section className='mt-10 md:mt-20'>
        <ul className='grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16'>
          {
            medicos.map(({ nombre, informacion, especialidad, imagen }) => {
              return (
                <li key={nombre} className='flex flex-col md:flex-row gap-6 border tranlate-y-0 border-gray-50 hover:cursor hover:md:shadow-lg hover:-translate-y-2 transition duration-500 ease-in-out p-0 md:p-5 rounded-lg '>
                  <img
                    src={imagen}
                    alt='avatar doctor'
                    className='rounded-lg w-full md:w-52 aspect-square sm:aspect-[4/5] object-cover object-center'
                    loading='lazy'
                  />
                  <div className='flex-auto'>
                    <header>
                      <h4 className='font-bold text-2xl'>{nombre}</h4>
                      <p className='m-0 italic text-primary'>{especialidad}</p>
                    </header>
                    <div>
                      <p>{informacion}</p>
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </section>
    </Container>
  )
}
