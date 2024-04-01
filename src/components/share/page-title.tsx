import Container from './container'

export default function PageTitle ({ title }: { title: string }): JSX.Element {
  return (
    <div className='w-full py-16 sm:py-24 bg-primary-black bg-[url("/images/overlay-banner.webp")] bg-center bg-no-repeat bg-cover relative contrast-125'>
      <div className=' w-full h-full absolute bg-primary-black top-0 left-0 opacity-90 ' />
      <Container className='grid place-content-center relative z-10'>
        <h2 className='text-3xl md:text-5xl text-white font-semibold'>{title}</h2>
      </Container>
    </div>
  )
}
