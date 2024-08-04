import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Process from "./components/Process"
import Services from "./components/Services"
import Tech from "./components/Tech"


const App = () => {
  return (
    <main className=" bg-[#302C42] py-5  overflow-hidden">
     <Hero/>
     <About />
     <Services />
     <Tech />
     <Process />
     <Contact />
     <Footer />
    </main>
  )
}

export default App