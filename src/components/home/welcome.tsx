import Container from '../share/container'

export default function Welcome (): JSX.Element {
  return (
    <Container className='pt-24 pb-20 md:pb-28 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24'>
      <picture className='w-full aspect-auto relative z-0 bg-gray-200 rounded-lg'>
        <img src='/doctor_jairo_fernandez.webp' alt='Doctor Jairo Fernandez' className='rounded-lg w-full aspect-auto object-cover' loading='lazy' />
      </picture>
      <div className='self-center'>
        <h1 className='flex flex-col text-4xl md:text-5xl mb-8 gap-1 text-primary'>
          <span className='font-thin'>Bienvenidos a </span>
          <span className='uppercase font-bold'>unesi Ltda</span>
        </h1>
        <div>
          <p>En nombre de todos los miembros le damos la bienvenida a nuestra página. Trabajamos todos los días del año para proveer la mejor atención y cuidado de su salud. </p>

          <p>Queremos brindarle la tranquilidad que usted necesita, por eso nuestro equipo de trabajadores altamente calificado, se mantiene a la vanguardia para poner a su disposición un excelente servicio en un ambiente seguro, confortable y con una atención humanizada al usuario.</p>

          <p>De nuevo muchas gracias y espero poder tener la oportunidad de atenderle.</p>
        </div>
      </div>
    </Container>
  )
}
