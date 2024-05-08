import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Container from '../share/container'
import Title from '../share/title'

export default function Videos (): JSX.Element {
  return (
    <Container className='grid place-items-center pt-24'>

      <section className='grid grid-cols-2 gap-x-10 w-full place-content-center'>
        <LiteYouTubeEmbed
          id='HAsyyVRqPO8'
          title='What’s new in Material Design for the web (Chrome Dev Summit 2019)'
        />
        <LiteYouTubeEmbed
          id='HAsyyVRqPO8'
          title='What’s new in Material Design for the web (Chrome Dev Summit 2019)'
        />
      </section>
    </Container>
  )
}
