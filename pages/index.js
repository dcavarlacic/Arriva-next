import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import * as ui from '@mui/material';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Arriva &mdash; Poslovne i financijske usluge</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />

      <section className='hero'>
        <div class="hero-image"></div>
        <div className="container">
          <h1>Poslovne i financijske usluge</h1>
          <ui.Button variant="outlined" color="secondary">Započnimo suradnju</ui.Button>
        </div> 
       </section>

adaads
    </div>
  )
}
