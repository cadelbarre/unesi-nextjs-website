'use client'
import Carousel from 'react-grid-carousel'
import TestimonialsAvatar from './testimonials-avatar'

export default function TestimonialsCarousel ({ testimonials }: { testimonials: unknown[] }): JSX.Element {
  return (
    <Carousel loop showDots autoplay={3000}>

      <Carousel.Item>
        <div className='mx-auto max-w-2xl lg:max-w-4xl'>
          <figure className='mt-10 space-y-6'>
            <blockquote className='text-center text-lg leading-8 text-gray-900 sm:text-lg sm:leading-9'>
              <p>Completamente agradecida con la calidad humana y profesionalismo del Doctor Jairo, siempre hizo sentir a mi mamá optimista, siempre le mostraba las alternativas que tenía en su tratamiento.</p>
              <p> La intervino 3 veces entre estudios y cirugía, siempre fue un éxito rotundo, y aunque lamentablemente falleció debido a complicaciones con el covid, no fue debido al derrame hemorragico que tuvo, cuyas espectativa de vida eran casi nulas, si en alguien confiaría para salvarle y darle calidad de vida a un paciente con ACV, indiscutiblemente sería en el Doctor Jairo Fernández.</p>
            </blockquote>
            <TestimonialsAvatar
              image='https://avatar.iran.liara.run/public/88'
              name='Karen Ruiz, hija y cuidadora de Luz Estella Ceron Galviz'
              treatment='Panangeografia'
            />
          </figure>
        </div>
      </Carousel.Item>
    </Carousel>
  )
}
