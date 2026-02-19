import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import Services from '@/components/Services';
import Features from '@/components/Features';
import About from '@/components/About';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <Features />
        <About />
        {/*<Brands />*/}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
