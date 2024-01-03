import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Newsletter from "../components/Newsletter";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import Reviews from "../components/Reviews";
function Home() {
  return (
    <>
    <div className="bg-gray-600">
      <Navbar/>
      </div>

      <div className="bg-slate-400">
      <Hero  />
      </div>

      <div className="bg-gray-600">
      <Analytics />
      <Reviews/>
      <div className="bg-slate-400">
      <Newsletter />
      </div>
      {/* <Cards /> */}
      <Footer/>

    </div>
    </>
  );
}

export default Home;
