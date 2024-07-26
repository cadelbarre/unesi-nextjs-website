import Marquee from 'react-fast-marquee'

import Title from '../share/title'
import Container from '../share/container'

const AGREEMENTS = [
  'abaton',
  'cardiovascular-cesar',
  'cardiovida',
  'caribe',
  'hic',
  'hun',
  'iberoamerica',
  'mar-caribe',
  'mired',
  'misericordia',
  'porto',
  'reina-catalina',
  'san-vicente'
]

export default function Agreements (): JSX.Element {
  return (
    <Container className='py-14'>
      <header className='mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
        <Title>Alianzas y Convenios</Title>
      </header>
      <div>
        <Marquee className='space-x-10' gradient>
          {
          AGREEMENTS.map(agreement => <img src={`/convenios-logos/${agreement}.webp`} alt={`logo-${agreement}`} key={agreement} loading='lazy' className='ml-10 h-24 aspect-auto' />)
        }
        </Marquee>
      </div>
    </Container>
  )
}
