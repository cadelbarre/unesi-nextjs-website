'use client'
import Carousel from 'react-grid-carousel'

export default function TestimonialsCarousel ({ testimonials }: { testimonials: unknown[] }): JSX.Element {
  return (
    <Carousel loop showDots autoplay={3000}>
      <Carousel.Item>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <figure className='mt-10'>
            <blockquote className='text-center text-lg leading-8 text-gray-900 sm:text-xl sm:leading-9'>
              <p>Completamente agradecida con la calidad humana y profesionalismo del Doctor Jairo, siempre hizo sentir a mi mamá optimista, siempre le mostraba las alternativas que tenía en su tratamiento.</p>
              <p> La intervino 3 veces entre estudios y cirugía, siempre fue un éxito rotundo, y aunque lamentablemente falleció debido a complicaciones con el covid, no fue debido al derrame hemorragico que tuvo, cuyas espectativa de vida eran casi nulas, si en alguien confiaría para salvarle y darle calidad de vida a un paciente con ACV, indiscutiblemente sería en el dc jairo Fernandez.</p>
            </blockquote>
            <figcaption className='mt-10'>
              <img className='mx-auto h-14 w-14 rounded-full' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' alt='' loading='lazy' />
              <div className='mt-4 flex flex-col sm:flex-row items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900'>Karen Ruiz, hija y cuidadora de Luz Estella Ceron Galviz</div>
                <svg viewBox='0 0 2 2' width='3' height='3' aria-hidden='true' className='fill-gray-900'>
                  <circle cx='1' cy='1' r='1' />
                </svg>
                <div className='text-gray-600'>Panangeografia</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </Carousel.Item>

      <Carousel.Item>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <figure className='mt-10'>
            <blockquote className='text-center text-lg leading-8 text-gray-900 sm:text-xl sm:leading-9'>
              <p> La intervino 3 veces entre estudios y cirugía, siempre fue un éxito rotundo, y aunque lamentablemente falleció debido a complicaciones con el covid, no fue debido al derrame hemorragico que tuvo, cuyas espectativa de vida eran casi nulas, si en alguien confiaría para salvarle y darle calidad de vida a un paciente con ACV, indiscutiblemente sería en el dc jairo Fernandez.</p>
            </blockquote>
            <figcaption className='mt-10'>
              <img
                className='bg-gray-100 mx-auto h-14 w-14 rounded-full' src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                alt=''
                loading='lazy'
              />
              <div className='mt-4 flex flex-col sm:flex-row items-center justify-center space-x-3 text-base'>
                <div className='font-semibold text-gray-900'>Karen Ruiz, hija y cuidadora de Luz Estella Ceron Galviz</div>
                <svg viewBox='0 0 2 2' width='3' height='3' aria-hidden='true' className='fill-gray-900'>
                  <circle cx='1' cy='1' r='1' />
                </svg>
                <div className='text-gray-600'>Panangeografia</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
