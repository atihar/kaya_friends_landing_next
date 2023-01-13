import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-pink-900 to-gray-900">
      <Head>
        <title>Kaya Friends</title>
        <meta name="description" content="Kaya friends is a Dubai based Swedish startup who are working to connect professionals in a more socialistic way."/>
      </Head>
      <Header/>
      <Hero/>
      <Footer/>
    </div>
  )
}