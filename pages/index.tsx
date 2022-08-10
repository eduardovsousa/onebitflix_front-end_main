import Head from 'next/head';
import CardsSection from '../src/components/homeNoAuth/cardsSections';
import HeaderNoAuth from '../src/components/homeNoAuth/headerNoAuth';
import PresentationSection from '../src/components/homeNoAuth/presentationSection';
import styles from '../styles/HomeNoAuth.module.scss';

const HomeNoAuth = () => {
  return (
    <>
      <Head>
        <title>Onebitflix</title>
        <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon" />
        <meta property="og:title" content="Onebitflix" key="title" />
        <meta name="description" content="Tenha acesso aos melhores conteúdos de programação de forma simples e fácil!" />
      </Head>
      <main>
        <div className={ styles.sectionBackground }>
          <HeaderNoAuth/>
          <PresentationSection />
        </div>
        <CardsSection />
      </main>
    </>
  );
};

export default HomeNoAuth;