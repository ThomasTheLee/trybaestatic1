import Head from 'next/head';
import type { NextPage } from 'next';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/home/Hero';
import Motivation from '../components/home/Motivation';
import Footer from '../components/layout/Footer';
import { HomeFaqs } from '../components/home/home-faqs';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TryBae</title>
        <link rel="icon" href="icons/icon.png" />
      </Head>
     
      <div className="relative overflow-hidden">
        
        <Hero />
        <Motivation />
        <HomeFaqs />
      </div>
      <Footer />
    </>
  );
};

export default Home;
