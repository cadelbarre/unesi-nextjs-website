import Container from './container'
import TestimonialsCarousel from './testimonials-carousel'

export default function Testimonials (): JSX.Element {
  const testimonials = [] as unknown[]

  return (
    <Container className='pt-16 md:pt-24 grid place-items-center'>
      <header className='mb-2 sm:mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
        <h2 className='text-4xl md:text-5xl font-bold pb-4 text-primary'>Que Opinan Nuestros Pacientes</h2>
        <p className='text-lg md:text-lg mt-1'>Son hermosas historias y agradecimientos de algunos de nuestros pacientes</p>
      </header>

      <section className='relative isolate overflow-hidden bg-white px-6 py-6 sm:py-20 sm:pt-12 sm:pb-24 lg:px-8'>
        <div className='absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20' />
        <div className='absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center' />

        <TestimonialsCarousel
          testimonials={testimonials}
        />
      </section>
    </Container>
  )
}
