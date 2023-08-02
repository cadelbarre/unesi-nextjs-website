import Container from './container'

export default function PageTitle ({ title }: { title: string }): JSX.Element {
  return (
    <div className='w-full py-16 sm:py-32 bg-primary bg-[url("/images/overlay-banner.webp")] bg-no-repeat bg-cover relative contrast-125'>
      <div className=' w-full h-full absolute bg-primary top-0 left-0 opacity-80 ' />
      <Container className='grid place-content-center relative z-10'>
        <h2 className='text-3xl md:text-4xl text-white font-semibold'>{title}</h2>
      </Container>
    </div>
  )
}
