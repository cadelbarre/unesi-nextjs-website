
export default function Container ({
  children,
  className = ''
}:
{ children: React.ReactNode
  className?: string }): JSX.Element {
  return (
    <section className={`container px-6 md:px-0 mx-auto max-w-[70rem] ${className}`}>
      {children}
    </section>
  )
}
