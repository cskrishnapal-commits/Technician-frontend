import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import About from "../pages/About"
import "../css/about.css"

function Home() {

    return (

        <>

            <Navbar />

            <Hero />
            <section>

            <Feature />
            </section>


            <section>
            <About />
            </section>

            <Footer />
        

        </>
    );

}

export default Home;