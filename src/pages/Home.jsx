import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
function Home() {
  return (
    <div className="bg-gray-600">
      <Navbar/>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
      <Footer/>

    </div>
  );
}

export default Home;
