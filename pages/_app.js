import '../components/css/style.css';
import '../styles/tailwind.css';

import Header from '../components/header';
import Footer from '../components/footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default MyApp;
