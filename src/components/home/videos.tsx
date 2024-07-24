import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Container from '../share/container'

export default function Videos(): JSX.Element {
  return (
    <Container className='grid place-items-center pt-24'>

      <section className='grid grid-cols-2 gap-x-10 w-full place-content-center'>

        <figure>
          <a href="https://www.youtube.com/watch?v=HAsyyVRqPO8" target='_blank' className='relative'>
            <img
              src="/images/entrevista-ciencia-y-folklor.webp"
              alt="entrevista-ciencia-y-folklor"
              loading='lazy'
              title=''
              className='aspect-video'
            />
            <div className='absolute h-full w-full bg-gradient-to-t from-primary-black/90 z-10 top-0 left-0 px-10 py-6 flex items-end'>
              <h4 className='text-xl font-bold text-white'>Entrevista en Ciencia y Floklor</h4>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white absolute h-16 w-16 z-20 inset-0 mx-auto my-auto hover:scale-110 transition-transform duration-200 ease-out">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>

          </a>
        </figure>

        <figure>
          <a href="https://www.facebook.com/HeroesContraElACV/videos/webinar-ruta-de-atenci%C3%B3n-para-pacientes-con-sospecha-de-acv-doctor-jairo-fernand/361418341541988/" target='_blank' className='relative'>
            <img
              src="/images/webinar-ruta-atencion-pacientes-con-sospecha-de-ACV.avif"
              alt="webinar-ruta-atencion-pacientes-con-sospecha-de-ACV"
              title="Webinar: Ruta de atención para pacientes con sospecha de ACV"
              loading='lazy'
              className='aspect-video'
            />
            <div className='absolute h-full w-full bg-gradient-to-t from-primary-black/90 z-10 top-0 left-0 px-10 py-6 flex items-end'>
              <h4 className='text-xl font-bold text-white'>Ruta de atención para pacientes con sospecha de ACV</h4>
            </div>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-white absolute h-16 w-16 z-20 inset-0 mx-auto my-auto hover:scale-110 transition-transform duration-200 ease-out">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
            </svg>

          </a>
        </figure>

      </section>
    </Container>
  )
}
