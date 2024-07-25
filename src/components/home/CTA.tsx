import Link from 'next/link'
import Button from '../share/button'
import Container from '../share/container'
//  bg-[url(/images/overlay-indicators.webp)]
export default function CTA (): JSX.Element {
  return (
    <section className='relative py-20 mt-24 w-full bg-[url(/images/dudas-e-inquietudes.webp)] bg-center bg-no-repeat bg-cover'>
      <div className='bg-primary-black/80 absolute z-10 inset-0 mix-blend-multiply' />
      <Container className='relative z-20 mx-auto px-4 gap-x-12 justify-between md:flex md:flex-col md:px-8'>
        <div className='max-w-xl'>
          <h3 className='text-white text-3xl font-bold sm:text-5xl'>
            ¿ Tienes dudas e inquietud ?
          </h3>
          <p className='mt-3 text-gray-100'>
            Conoce las principales inquietudes de nuestros pacientes, si ninguna resuelve tus dudas no dudes en contactarnos.
          </p>
        </div>
        <Link href='#' className='flex-none'>
          <Button className='bg-white text-primary-black font-semibold mt-10'>
            Preguntas Frecuentes
          </Button>
        </Link>
      </Container>
    </section>
  )
}
