import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import FeaturedJobs from "../components/FeaturedJobs";
import Freelancers from "../components/Freelancers";
import Footer from "../components/Footer";



export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedJobs />
      <Freelancers />
      <Footer  />
    </>
  );
}