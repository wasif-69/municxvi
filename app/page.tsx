import Footer from "@/Components/footer/footer";
import Gallery from "@/Components/gallery/gallery";
import Header from "@/Components/Header/head";
import Location from "@/Components/location/Location";
import Main from "@/Components/main/main";
// import Register from "@/Components/Registration/register";
import Schedule from "@/Components/Schedule/schedule";
import Sponser from "@/Components/sponser/sponser";

export default function Home() {
  return (
    <div className="bg-[#061222] ">
      <Header/>
      <Main/>
      <Sponser/>
      <Schedule/>
      <Gallery/>
      <Location/>
      <Footer/>
    </div>


  );
}
