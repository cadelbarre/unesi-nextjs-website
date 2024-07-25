import { twMerge } from 'tailwind-merge'

export default function Container ({
  children,
  className = ''
}:
{ children: React.ReactNode
  className?: string }): JSX.Element {
  return (
    <section className={twMerge('container px-6 md:px-10 xl:px-0 mx-auto max-w-[70rem]', className)}>
      {children}
    </section>
  )
}
