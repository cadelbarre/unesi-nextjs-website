import MarqueeCheck from 'react-fast-marquee'
const certificateNames = ['neurocirugia', 'radiologia', 'silan', 'uba', 'uninorte']

export default function Marquee (): JSX.Element {
  return (
    <section className='border-y border-gray-200 py-4 sm:py-8 w-full'>
      <div className='container mx-auto  [&>img]:object-contain'>
        <MarqueeCheck pauseOnHover>
          {
          certificateNames.map(name => {
            return <img key={name} src={`/certificates/${name}.webp`} alt={`unesi-certificate-${name}`} className='mr-10 h-14 sm:h-24' loading='lazy' />
          })
        }
        </MarqueeCheck>
      </div>
    </section>
  )
}
