import Title from '../share/title'

export default function Doctor (): JSX.Element {
  return (
    <section className='bg-slate-50 relative'>
      <picture className='sm:absolute w-0 md:w-1/2 h-full'>
        <img
          src='/images/jairo-conferencia.webp'
          alt='Doctor Jairo Fernandez'
          className='object-cover md:object-center lg:object-left-top min-h-full rounded-r-2xl h-full w-full'
          loading='lazy'
          title='Doctor Jairo Fernandez - neurocirujano'
        />
      </picture>
      <div className='w-full md:w-1/2 ml-auto px-6 py-8 sm:py-16 md:px-10 lg:px-20 lg:py-24'>
        <header className='mb-6'>
          <Title>
            Dr. Jairo Martin Fernandez Henríquez
            <span className='text-xl mt-1 font-medium'>Neurocirujano Neurointervencionista</span>
          </Title>
        </header>
        <div>
          <p>
            Médico Cirujano por la Universidad Libre de Barranquilla y
            especialista en Neurocirugía con Título Otorgado de la Universidad
            de Buenos Aires (Homologación Colombiana de Título Extranjero ante
            el Ministerio de Educación Nacional).
          </p>

          <p>
            Complementó sus estudios con entrenamientos especiales y la
            subespecialidad en Neurocirugia Endovascular y Neurointervenvionismo
            en el Instituto E.N.E.R.I. Y SILAN en Bs As. <strong>Conferencista desde
              2005 en múltiples simposios nacionales e internacionales.
            </strong>
          </p>

          <p>
            Presidente de la junta directiva del Colegio Colombiano de Neurointervencionismo, la Sociedad
            Colombiana de Radiología, del Comité Académico del Grupo Colombiano
            de Neurointervenvionismo, de SILAN, Presidente Capítulo Atlántico,
            Proctor Sip Internacional y Director científico de la Red Stroke del
            distrito de Barranquilla.
          </p>
        </div>

      </div>
    </section>
  )
}
