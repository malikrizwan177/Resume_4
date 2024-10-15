import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar"
import { Loader } from "./components/Loader"
import ScrollToTop from "./components/ScrollTop"
const Hero = lazy(() => import("./components/Hero"))
const Services = lazy(() => import("./components/Services"))
const Skills = lazy(() => import("./components/Skills"))
const Experience = lazy(() => import("./components/Experience"))
const Portfolio = lazy(() => import("./components/Portfolio"))
const Testimonial = lazy(() => import("./components/Testimonial"))
const Contact = lazy(() => import("./components/Contact"))

const App = () => {
  return (
    <div className="text-white h-lvh">
      <Navbar/>
      <Suspense fallback={<Loader/>}>
        <Hero/>
        <Services/>
        <Skills/>
        <Experience/>
        <Portfolio/>
        <Testimonial/>
        <Contact/>
      <ScrollToTop/>
      </Suspense>
    </div>
  )
}

export default App
