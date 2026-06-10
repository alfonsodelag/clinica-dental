import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment, useEffect, useState } from 'react';
import ThemeProvider from 'theme/ThemeProvider';
import Layout from 'components/Layout';

import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plyr-react/plyr.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({ interval: -400, duration: 700, percentage: 0.8 });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => setLoading(false), []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Odonto Panamá | Clínica Dental en Obarrio</title>
        <meta
          name="description"
          content="Clínica dental integral en Obarrio, Panamá. Odontología general, limpieza dental, ortodoncia, estética, endodoncia, prótesis, implantes y cirugías."
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Odonto Panamá | Clínica Dental en Obarrio" />
        <meta property="og:description" content="Clínica dental integral en Obarrio, Panamá. Agenda tu cita por WhatsApp." />
      </Head>
      <Layout>
        <ThemeProvider>
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </ThemeProvider>
      </Layout>
    </Fragment>
  );
}

export default MyApp;

