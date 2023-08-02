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
        <img src='/sliders/beneficios-deporte.webp' alt='beneficios-deporte' />
      </SwiperSlide>
      <SwiperSlide className='h-screen w-screen max-h-[40rem]'>
        <img src='/sliders/tipos-de-ataques.webp' alt='tipos-de-ataques-ACV' className='object-cover object-top w-full aspect-auto block' />
      </SwiperSlide>
    </Swiper>
  )
}
