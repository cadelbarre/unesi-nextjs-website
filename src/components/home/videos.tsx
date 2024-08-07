import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Container from '../share/container'

export default function Videos (): JSX.Element {
  const VIDEOS = [
    {
      url: 'https://www.youtube.com/watch?v=HAsyyVRqPO8',
      alt: 'entrevista-ciencia-y-folklor',
      img: '/images/entrevista-ciencia-y-folklor.webp',
      title: 'Importancia de conocer las diferentes patologías del cerebro',
      description: 'Entrevista con el profesional de la salud, el doctor Jairo Fernández, hablando un poco de su vida profesional al igual que las diferentes patologías del cerebro.'
    },
    {
      url: 'https://www.facebook.com/HeroesContraElACV/videos/webinar-ruta-de-atenci%C3%B3n-para-pacientes-con-sospecha-de-acv-doctor-jairo-fernand/361418341541988/',
      alt: 'webinar-ruta-atencion-pacientes-con-sospecha-de-ACV',
      img: '/images/webinar-ruta-atencion-pacientes-con-sospecha-de-ACV.avif',
      title: 'Ruta de atención para pacientes con sospecha de ACV',
      description: 'Recomendaciones para aquellos pacientes que sospechan de algún accidente cerebrovascular. Verdades y mitos del ACV.'
    },
      {
      url: 'https://www.instagram.com/reel/C8-g_76PL7U/?igsh=MTh3dWczbTlud3dxOQ%3D%3D',
      alt: '4-sintomas-para-identificar-un-ACV-accidente-cerebrovacular',
      img: '/images/sintomas-ataque-cerebrovascular.webp',
      title: '4 síntomas para identificar un ACV',
      description: '¡Actúa rápido! Ante cualquiera de estos síntomas, dirígete inmediatamente a un centro médico equipado con tecnología de necesaria para tratar un ACV'    
    },
    {
      url: 'https://www.instagram.com/reel/C7h1uEUvEWU/?igsh=MWdjOHc4enVweDVtdQ%3D%3D',
      alt: 'reel-analizamos-una-angiografía-cerebral',
      img: '/images/estudio-angiografia.webp',
      title: 'Reel: Analizamos una angiografía cerebral',
      description: 'estudio de una angiografía cerebral realizada a un paciente con una arteria obstruida'    
    }
  ]

  return (
    <Container className='grid place-items-center py-16 sm:pt-24'>

      <section className='grid sm:grid-cols-2 lg:grid-cols-4  gap-y-10 lg:gap-y-0 gap-x-10 w-full place-content-center'>

        {
          VIDEOS.map(video => {
            return (
              <article key={video.url}>
                <header>
                  <figure>
                    <a href={video.url} target='_blank' className='relative rounded-xl' rel='noreferrer'>
                      <img
                        src={video.img}
                        alt={video.alt}
                        loading='lazy'
                        title={video.title}
                        className='aspect-video rounded-xl'
                      />
                      <div className='absolute rounded-xl h-full w-full bg-gradient-to-t from-primary-black/90 z-10 top-0 left-0 px-10 py-6 flex items-end' />

                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth='1.5' stroke='currentColor' className='text-white/70 absolute h-20 w-20 z-20 inset-0 mx-auto my-auto hover:scale-125 transition-transform duration-200 ease-out'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
                        <path strokeLinecap='round' strokeLinejoin='round' d='M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z' />
                      </svg>

                    </a>
                  </figure>
                </header>

                <div>
                  <h2 className='font-bold text-xl leading-snug pt-4'>{video.title}</h2>
                  <p>{video.description}</p>
                </div>
              </article>
         )
          })
        }

      </section>
    </Container>
  )
}
