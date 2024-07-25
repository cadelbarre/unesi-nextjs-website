import Container from '../share/container'
import Title from '../share/title'

export default function Welcome (): JSX.Element {
  return (
    <Container className='pt-24 pb-12 sm:pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12'>
      <picture className='w-full aspect-auto relative z-0 bg-gray-200 rounded-lg'>
        <img
          src='/doctor_jairo_fernandez.webp'
          alt='Doctor Jairo Fernandez'
          className='rounded-lg w-full aspect-auto h-full object-center object-cover '
          loading='lazy'
        />
      </picture>
      <div className='self-center lg:ml-11'>
        <Title className='font-bold tracking-tight mb-4 sm:mb-8'>
          Bienvenidos a
          <span>UNESI S.A.S</span>
        </Title>
        <div className='max-w-[50ch]'>
          <p>En nombre de todos los miembros le damos la bienvenida a nuestra página. Trabajamos todos los días del año para proveer la mejor atención y cuidado de su salud. </p>

          <p>Queremos brindarle la tranquilidad que usted necesita, por eso nuestro equipo de trabajadores altamente calificado, se mantiene a la vanguardia para poner a su disposición un excelente servicio en un ambiente seguro, confortable y con una atención humanizada al usuario.</p>

          <p>De nuevo muchas gracias y espero poder tener la oportunidad de atenderle.</p>
        </div>
      </div>
    </Container>
  )
}
