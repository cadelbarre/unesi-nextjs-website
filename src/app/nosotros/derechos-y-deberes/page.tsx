import Container from '@/components/share/container'
import PageTitle from '@/components/share/page-title'

export default function DerechosYDeberes (): JSX.Element {
  return (
    <>
      <PageTitle title='Derechos y Deberes' />
      <Container className='py-16 md:py-24 grid place-items-center bg-white'>
        <div className='mx-auto max-w-7xl lg:px-8'>

          <div className='mx-auto mt-10 sm:mt-16 max-w-2xl lg:max-w-4xl'>
            <div className='h-60 aspect-auto mb-12 sm:mb-20 lg:mb-24 rounded-lg shadow-lg shadow-primary/20'>
              <img src='/images/derechos-y-deberes.webp' alt='imagen politica de calidad' loading='lazy' className=' object-cover h-full w-full object-center rounded-lg' />
            </div>

            <div className='w-full md:w-4/5 flex flex-col gap-y-14 sm:gap-y-20 '>
              <div className='space-y-8'>
                <h2 className='text-3xl font-medium tracking-tighter mb-8 gap-1 text-primary'>Mis Derechos</h2>
                <article>
                  <h3 className='font-semibold'>A Conocer</h3>
                  <ul className='list-disc ml-10'>
                    <li>
                      <p>
                        De forma clara mi condición de salud y el tratamiento que
                        recibiré.
                      </p>
                    </li>
                    <li>
                      <p>
                        El portafolio de servicios y los costos derivados de la atención
                        que obtendré.
                      </p>
                    </li>
                    <li>
                      <p>
                        Los escenarios de participación social y cómo acceder a los
                        mecanismos de escucha.
                      </p>
                    </li>
                  </ul>
                </article>
                <article>
                  <h3 className='font-semibold'>A Elegir</h3>
                  <ul className='list-disc ml-10'>
                    <li>
                      <p>
                        La unidad de servicios de salud y los profesionales de salud que
                        me atenderán.
                      </p>
                    </li>
                    <li>
                      <p>
                        Si deseo o no, recibir el tratamiento y/o procedimiento ordenado
                        por el profesional de salud.
                      </p>
                    </li>
                    <li>
                      <p>Si acepto o no, la donación de órganos y/o sangre.</p>
                    </li>
                    <li>
                      <p>Morir con dignidad.</p>
                    </li>
                    <li>
                      <p>Si acepta o rechaza participar en programas de investigación.</p>
                    </li>
                  </ul>
                </article>
                <article>
                  <h3 className='font-semibold'>A Recibir</h3>
                  <ul className='list-disc ml-10'>
                    <li>
                      <p>Información, capacitación y educación en temas de salud.</p>
                    </li>
                    <li>
                      <p>
                        Una atención segura, integral, oportuna y eficiente de acuerdo a
                        mi condición de salud, género y edad.
                      </p>
                    </li>
                    <li>
                      <p>
                        Un trato digno; respetando mi religión, costumbres y creencias.
                      </p>
                    </li>
                    <li>
                      <p>
                        Manejo confidencial de mi condición de salud y de lo consignado
                        en mi Historia Clínica.
                      </p>
                    </li>
                    <li>
                      <p>
                        Apoyo espiritual y/o emocional, cuando sienta que lo requiero.
                      </p>
                    </li>
                    <li>
                      <p>Consulta de segunda opinión en casos especiales.</p>
                    </li>
                    <li>
                      <p>Atención en salud que respete mi privacidad.</p>
                    </li>
                  </ul>
                </article>
              </div>

              <div className='space-y-8'>
                <h2 className='text-3xl font-medium tracking-tighter mb-8 gap-1 text-primary'>Mis Deberes</h2>
                <article>
                  <h3 className='font-semibold'>A Informar</h3>
                  <ul className='list-disc ml-10'>
                    <li>
                      <p>
                        Mis antecedentes de salud, entorno familiar y hábitat u otra
                        situación asociada a mi situación étnica.
                      </p>
                    </li>
                    <li>
                      <p>
                        Si acepto o rechazo el tratamiento y/o procedimiento de salud
                        ordenado por el profesional.
                      </p>
                    </li>
                    <li>
                      <p>
                        Sobre situaciones irregulares que evidencie en la unidad de
                        servicios de salud.
                      </p>
                    </li>
                  </ul>
                </article>
                <article>
                  <h3 className='font-semibold'>A Cumplir</h3>
                  <ul className='list-disc ml-10'>
                    <li>
                      <p>
                        Puntualmente con las citas asignadas por la unidad de servicios
                        de salud y presentarme en adecuadas condiciones de aseo.
                      </p>
                    </li>
                    <li>
                      <p>
                        Con el tratamiento y recomendaciones ordenadas por el equipo de
                        salud.
                      </p>
                    </li>
                    <li>
                      <p>
                        Con el pago oportuno de los servicios y derivados de mi
                        condición de aseguramiento.
                      </p>
                    </li>
                    <li>
                      <p>
                        Con el cuidado de los recursos físicos y materiales de la unidad
                        de servicios de salud.
                      </p>
                    </li>
                  </ul>
                </article>
                <article>
                  <h3 className='font-semibold'>A Respetar</h3>
                  <ul className='list-disc ml-10'>
                    <li>
                      <p>
                        Los principios, valores y objetivos que promulga la unidad de
                        servicios de salud.
                      </p>
                    </li>
                    <li>
                      <p>
                        Al personal de salud y a la comunidad usuaria de los servicios.
                      </p>
                    </li>
                    <li>
                      <p>
                        Las condiciones de raza, género y culto de las colaboraciones de
                        la unidad de servicios de salud, usuarios, sus familias y la
                        comunidad.
                      </p>
                    </li>
                  </ul>
                </article>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </>
  )
}
