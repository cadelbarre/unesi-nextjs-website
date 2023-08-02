import Doctor from '@/components/home/doctor'
import Indicators from '@/components/home/indicators'
import Slider from '@/components/home/slider'
import Team from '@/components/home/team'
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
      <Team />
      <Indicators />
      <Testimonials />
    </>
  )
}
