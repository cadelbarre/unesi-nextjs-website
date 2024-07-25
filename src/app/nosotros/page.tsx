import Agreements from '@/components/home/agreements'
import Container from '@/components/share/container'
import PageTitle from '@/components/share/page-title'

export default function QuienesSomos (): JSX.Element {
  return (
    <>
      <PageTitle title='Nosotros' />
      <Container className='pt-16 md:pt-24 pb-14 grid place-items-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-16'>
          <div className='space-y-8'>
            <div>
              <h3 className='font-bold text-2xl'>Misión</h3>
              <p className='leading-relaxed'>Somos una organización conformada por un grupo de profesionales de la salud certificados a nivel nacional e internacional en el área de neurocirugía y neurocirugía intervencionista, que presta servicios especializados en el área de hemodinamia a las diferentes instituciones prestadoras de salud de la costa y a los pacientes que llegan a nuestro consultorio, bajo los mas altos estándares de calidad, tecnología y sentido humano, garantizando a nuestros pacientes una atención clara, accesible, oportuna y de confianza.</p>
            </div>
            <div>
              <h3 className='font-bold text-2xl'>Visión</h3>
              <p className='leading-relaxed'>Convertirnos en la opción número uno de las diferentes instituciones prestadoras de salud en el país en atención de neurocirugía y neurocirugía intervencionista al año 2026, ampliando nuestra cobertura nacional de manera eficaz y oportuna, respaldados por la trayectoria y eficiencia de nuestros especialistas.</p>
            </div>
          </div>
          <div className='h-full w-full bg-gray-200'><img src='/images/mision-vision-unesi.png' alt='misión y visión unesi' loading='lazy' className='rounded-lg w-full h-full object-cover shadow-lg shadow-primary/30' /></div>
        </div>
      </Container>
      <Agreements />
    </>
  )
}
