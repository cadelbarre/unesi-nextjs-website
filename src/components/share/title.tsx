import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Title ({
  children,
  className = ''
}: {
  children: React.ReactNode
  className?: string
}): JSX.Element {
  return (
    <>
      <h1 className={twMerge('flex flex-col text-4xl md:text-5xl text-primary-black font-bold', className)}>
        {children}
      </h1>
    </>
  )
}
