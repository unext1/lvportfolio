import Hero from '../components/hero';
import About from '../components/about';
import Journey from '../components/Journey';
import Skils from '../components/skils';
import Portfolio from '../components/portfolio';
import Contact from '../components/contact';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Laurynas.com - Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-type" content="text/html; charset-utf-8" />
      </Head>
      <Hero />
      <About />
      <Skils />
      <Journey />
      <Portfolio />
      <Contact />
    </>
  );
}
