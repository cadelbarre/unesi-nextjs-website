interface Props {
  image: string
  name: string
  treatment: string
}
export default function TestimonialsAvatar ({
  image,
  name,
  treatment
}: Props): JSX.Element {
  return (
    <figcaption className='space-y-4'>
      <img className='mx-auto h-14 w-14 rounded-full' src={image} alt={`imagen de ${name}`} loading='lazy' />
      <div className='flex flex-col sm:flex-row items-center justify-center space-x-3 text-base'>
        <div className='font-semibold text-gray-900'>{name}</div>
        <svg viewBox='0 0 2 2' width='3' height='3' aria-hidden='true' className='fill-gray-900'>
          <circle cx='1' cy='1' r='1' />
        </svg>
        <div className='text-gray-600'>{treatment}</div>
      </div>
    </figcaption>
  )
}
