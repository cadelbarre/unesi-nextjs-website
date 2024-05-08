'use client'
import Cta from '@/components/home/CTA'
import Agreements from '@/components/home/agreements'
import Doctor from '@/components/home/doctor'
import Indicators from '@/components/home/indicators'
import Slider from '@/components/home/slider'
import Videos from '@/components/home/videos'
import Welcome from '@/components/home/welcome'
import Marquee from '@/components/share/marquee'
import Testimonials from '@/components/share/testimonials'

export default function Home (): JSX.Element {
  return (
    <>
      <Slider />
      <Welcome />
      <Doctor />
      <Marquee />
      <Videos />
      <Indicators />
      <Cta />
      <Testimonials />
      <Agreements />
    </>
  )
}
