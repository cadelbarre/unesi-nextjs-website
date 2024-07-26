'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export default function Slider (): JSX.Element {
  return (
    <Swiper
      navigation
      pagination
      autoplay={{
        delay: 4000,
        disableOnInteraction: false
      }}
      loop
      modules={[Autoplay, Pagination, Navigation]}
      className='h-full w-full'
      spaceBetween={10}
      slidesPerView={1}
    >
      <SwiperSlide className='h-screen w-screen max-h-[40rem]'>
        <picture>
          <source media='(max-width: 799px)' srcSet='/sliders/beneficios-deporte-acv-mobile.webp' />
          <img src='/sliders/beneficios-deporte-acv.webp' alt='Beneficios del deporte y el ACV' title='Beneficios del deporte y el ACV' />
        </picture>
      </SwiperSlide>
      <SwiperSlide className='h-screen w-screen max-h-[40rem]'>
        <picture>
          <source media='(max-width: 799px)' srcSet='/sliders/tipos-de-ataques-cerebrovascular-mobile.webp' />
          <img src='/sliders/tipos-de-ataques-cerebrovascular.webp' alt='Beneficios del deporte y el ACV' title='Beneficios del deporte y el ACV' />
        </picture>
      </SwiperSlide>
    </Swiper>
  )
}
