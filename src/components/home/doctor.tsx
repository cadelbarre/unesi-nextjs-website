
export default function Doctor (): JSX.Element {
  return (
    <section className='bg-slate-50 relative'>
      <picture className='absolute w-0 md:w-1/2 h-full'>
        <img src='/doctor_jairo_fernandez.webp' alt='Doctor Jairo Fernandez' className='object-cover object-right-top min-h-full rounded-r-2xl h-full w-full' loading='lazy' />
      </picture>
      <div className='w-full md:w-1/2 ml-auto px-6 py-16 md:px-20 md:py-24'>
        <header className='mb-6'>
          <h2 className='text-4xl md:text-5xl font-bold text-primary'>Dr. Jairo Martin Fernandez Henríquez</h2>
          <h4 className='text-xl mt-1 font-medium'>Neurocirugano Endovascular</h4>
        </header>
        <p>
          Médico Cirujano por la Universidad Libre de Barranquilla y
          especialista en Neurocirugía con Título Otorgado de la Universidad
          de Buenos Aires (Homologación Colombiana de Título Extranjero ante
          el Ministerio de Educación Nacional).
        </p>

        <p>
          Complementó sus estudios con entrenamientos especiales y la
          subespecialidad en Neurocirugia Endovascular y Neurointervenvionismo
          en el Instituto E.N.E.R.I. Y SILAN en Bs As. Conferencista desde
          2005 en múltiples simposios nacionales e internacionales. Miembro
          activo de la Sociedad Colombiana de Neurocirugía, la Sociedad
          Colombiana de Radiología, del Comité Académico del Grupo Colombiano
          de Neurointervenvionismo, de SILAN, Presidente Capítulo Atlántico,
          Proctor Sip Internacional y Director científico de la Red Stroke del
          distrito de Barranquilla.
        </p>

        <button className='border border-primary bg-transparent text-primary px-6 py-3 font-bold rounded-lg mt-10 hover:text-white hover:border-transparent hover:bg-primary transition duration-300 ease-in-out'>Saber más</button>
      </div>
    </section>
  )
}
