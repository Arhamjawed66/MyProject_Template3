import ClothesSlider from "@/components/clothesidebar";
import Hero2 from "@/components/feaured";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Hero3 from "@/components/hero3";
import ProductSlider from "@/components/itemsilder";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <div>
    <Nav/>
    <Hero/>
    <ProductSlider/>
    <Hero2/>
    <ClothesSlider/>
    <Hero3/>
    <Footer/>

    
    
    </div>
  )
}
