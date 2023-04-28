import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";
import About from "../components/About";
import Features from "../components/Features";
import Reviews from "../components/Reviews";

function Home() {
  return (
    <div className="bg-black max-w-screen">
      <Head>
        <title>KayaFriends</title>
        <meta name="description" content="Kaya friends is a Dubai based Swedish startup who are working to connect professionals in a more socialistic way."/>
      </Head>
      <Header/>
      <Hero/>
      {/* <About/> */}
      {/* <Features/> */}
      {/* <Reviews/> */}
      <Footer/>
    </div>
  )
}
export default Home