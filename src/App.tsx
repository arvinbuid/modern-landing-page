import Layout from "./components/Layout"
import Brands from "./components/sections/Brands"
import Hero from "./components/sections/Hero"

const Home = () => {
  return (
    <Layout title="Modern Landing Page">
      <Hero />
      <Brands />
    </Layout>
  )
}

export default Home