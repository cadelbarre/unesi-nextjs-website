import MarqueeCheck from 'react-fast-marquee'
const certificateNames = ['neurocirugia', 'radiologia', 'silan', 'uba', 'uninorte']

export default function Marquee (): JSX.Element {
  return (
    <section className='border-y border-gray-200 py-4 sm:py-8 w-full'>
      <div className='container mx-auto  [&>img]:object-contain'>
        <MarqueeCheck gradient>
          {
          certificateNames.map(name => {
            return <img key={name} src={`/logos-estudios/${name}.webp`} alt={`logo-estudios-unesi-${name}`} className='mr-10 h-14 sm:h-20' loading='lazy' />
          })
        }
        </MarqueeCheck>
      </div>
    </section>
  )
}
