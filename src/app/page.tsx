'use client'
import Doctor from '@/components/home/doctor'
import Indicators from '@/components/home/indicators'
import Slider from '@/components/home/slider'
import Team from '@/components/home/team'
import Welcome from '@/components/home/welcome'
import Container from '@/components/share/container'
import Marquee from '@/components/share/marquee'
import Testimonials from '@/components/share/testimonials'

import CountUp from 'react-countup'

export default function Home (): JSX.Element {
  const experienceYear = new Date().getFullYear() - 2000

  return (
    <>
      <Slider />
      <Welcome />
      <Doctor />
      <Marquee />
      <Team />
      <Indicators />
      {/* Logos de clinicas */}
      <Testimonials />
    </>
  )
}
