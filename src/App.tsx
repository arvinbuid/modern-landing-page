import Layout from "./components/Layout"
import AboutUs from "./components/sections/AboutUs"
import Brands from "./components/sections/Brands"
import CTA from "./components/sections/CTA"
import Hero from "./components/sections/Hero"
import Pricing from "./components/sections/Pricing"
import Services from "./components/sections/Services"

const Home = () => {
  return (
    <Layout title="Modern Landing Page">
      <Hero />
      <Brands />
      <Services />
      <AboutUs />
      <Pricing />
      <CTA />
    </Layout>
  )
}

export default Home