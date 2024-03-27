import { Work_Sans, Roboto, Mulish } from 'next/font/google'
import Header from '@/components/layout/navbar'
import Footer from '@/components/footer'
import './globals.css'

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap'
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400']
})

const mulish = Mulish({
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: {
    default: 'UNESI SAS :: UNIDAD DE NEUROCIRUGIA ENDOVASCULAR STROKE E INTERVENCIONISMO S.A.S. '
  },
  description: 'Organización conformada por un grupo de profesionales de la salud certificados a nivel nacional e internacional en el área de neurocirugía y neurocirugía intervencionista, que presta servicios especializados en el área de hemodinamia a las diferentes instituciones prestadoras de salud de la costa.',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Neurocirujano endovascular',
    'Neurocirugía',
    'Tratamiento endovascular',
    'Intervenciones cerebrovasculares',
    'Embolización cerebral',
    'Aneurisma cerebral',
    'Malformaciones arteriovenosas (MAV)',
    'Accidente cerebrovascular (ACV)',
    'Terapia endovascular',
    'Angiografía cerebral',
    'Cirugía mínimamente invasiva',
    'Cateterismo cerebral',
    'Neurointervencionismo',
    'Neuroendovascular',
    'Cirugía cerebrovascular',
    'Stent cerebral',
    'Radiología intervencionista',
    'Terapia de coagulación endovascular',
    'Cerebro y sistema nervioso',
    'Barranquilla, Colombia',
    'Doctor jairo fernandez hernandez',
    'Stroke'
  ],
  openGraph: {
    title: 'UNESI SAS :: UNIDAD DE NEUROCIRUGIA ENDOVASCULAR STROKE E INTERVENCIONISMO S.A.S. ',
    description: 'Organización conformada por un grupo de profesionales de la salud certificados a nivel nacional e internacional en el área de neurocirugía y neurocirugía intervencionista, que presta servicios especializados en el área de hemodinamia a las diferentes instituciones prestadoras de salud de la costa.',
    url: 'https://www.unesi.com.co',
    siteName: 'UNESI SAS',
    images: [
      {
        url: '/images/op-image-unesi.webp',
        width: 800,
        height: 600
      },
      {
        url: 'https://nextjs.org/og-alt.png',
        width: 1800,
        height: 1600,
        alt: 'My custom alt'
      }
    ],
    locale: 'en_ES',
    type: 'website'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang='es' className={`${workSans.className} ${roboto.className} ${mulish.className}`}>
      <body id='root'>
        <Header />
        <main className='flex min-h-screen flex-col items-center justify-between relative'>
          {children}
        </main>
        <Footer />
        <a href='https://api.whatsapp.com/send?phone=573152616685&text=Hola,%20quisiera%20solicitar%20una%20cita%20con%20el%20doctor%20para%20el%20d%C3%ADa%20...' target='_blank' className='fixed bottom-6 left-6 z-20 h-10 md:h-14 aspect-square hover:scale-110 transition-transform duration-300 ease-in-out' rel='noreferrer noopener'>
          <img src='/whatsapp.svg' alt='whatsapp logo' className='object-fill drop-shadow-md' />
        </a>

        <a href='#root' className='fixed bottom-6 right-6 z-20 h-10 md:h-14 aspect-square hover:scale-110 transition duration-300 ease-in-out rounded-full bg-primary/50 hover:bg-primary hover:text-white grid place-content-center shadow-lg'>
          <svg width='26px' height='26px' strokeWidth='1.5' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' color='currentColor'><path d='M6 15l6-6 6 6' stroke='currentColor' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' /></svg>
        </a>
      </body>
    </html>
  )
}
