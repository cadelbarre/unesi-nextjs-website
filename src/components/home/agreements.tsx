import Marquee from 'react-fast-marquee'

import Title from '../share/title'
import Container from '../share/container'

export default function Agreements (): JSX.Element {
  return (
    <Container className='py-14'>
      <header className='mb-6 text-center flex flex-col justify-center items-center max-w-[42rem] mx-auto'>
        <Title>Alianzas y Convenios</Title>
      </header>
      <div>
        <Marquee className='space-x-10' gradient>
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
          <img src='https://www.cmsinapsis.com.co/enlaces/_1611848183.jpg' alt='logo' loading='lazy' className='ml-10 h-24 aspect-auto' />
        </Marquee>
      </div>
    </Container>
  )
}
