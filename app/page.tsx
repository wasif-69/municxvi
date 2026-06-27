import Header from "@/Components/Header/head";
import Main from "@/Components/main/main";
import Register from "@/Components/Registration/register";
import Schedule from "@/Components/Schedule/schedule";
import Sponser from "@/Components/sponser/sponser"

export default function Home() {
  return (
    <div className="bg-green-800">
      <Header/>
      <Main/>
      <Sponser/>
      <Schedule/>
      <Register/>
    </div>


  );
}
