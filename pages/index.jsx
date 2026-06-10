import { Fragment } from 'react';
import Head from 'next/head';
import Hero from 'components/Hero';
import InfoBar from 'components/InfoBar';
import Services from 'components/Services';
import Specialties from 'components/Specialties';
import CTASection from 'components/CTASection';
import Facts from 'components/Facts';
import DoctorSection from 'components/DoctorSection';
import InnovationSection from 'components/InnovationSection';
import BlogSection from 'components/BlogSection';
import ContactSection from 'components/ContactSection';
import PageProgress from 'components/PageProgress';
import { getBlogPosts } from '../src/lib/sanity';

const Home = ({ posts }) => (
  <Fragment>
    <PageProgress />
    <Head>
      <title>Odonto Panamá | Clínica Dental en Obarrio, Ciudad de Panamá</title>
      <meta
        name="description"
        content="Clínica dental en Obarrio, Panamá. Odontología general, limpieza dental, odontopediatría, ortodoncia, estética dental, endodoncia, prótesis, implantes y cirugías. Agenda por WhatsApp +507 6054-4016."
      />
      <meta name="keywords" content="clínica dental Obarrio, dentista Panamá, Odonto Panamá, odontología general, ortodoncia, blanqueamiento dental, implantes dentales, endodoncia, odontopediatría" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Odonto Panamá | Clínica Dental en Obarrio" />
      <meta property="og:description" content="Clínica dental integral en Obarrio, Panamá. Servicios para niños y adultos. Agenda tu cita por WhatsApp." />
      <meta property="og:locale" content="es_PA" />
    </Head>

    <main className="content-wrapper overflow-hidden">
      {/* 1. Hero */}
      <Hero />

      {/* 2. Info bar – contacto + horario */}
      <InfoBar />

      {/* 3. About – Odontología integral para toda la familia */}
      <Services />

      {/* 4. Especialidades grid – fondo navy oscuro */}
      <Specialties />

      {/* 5. CTA – "Una forma simple de recuperar tu sonrisa" */}
      <CTASection />

      {/* 6. Stats – 500+ · 4.8 · 10+ · 4 años */}
      <Facts />

      {/* 7. Sobre Nosotros / Por qué elegirnos */}
      <DoctorSection />

      {/* 8. Preguntas Frecuentes con accordion */}
      <InnovationSection />

      {/* 9. Blog */}
      <BlogSection posts={posts} />

      {/* 10. Contacto + mapa */}
      <ContactSection />
    </main>
  </Fragment>
);

export const getStaticProps = async () => {
  const posts = await getBlogPosts();

  return {
    props: { posts },
    revalidate: 60
  };
};

export default Home;
