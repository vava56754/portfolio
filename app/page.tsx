import Layout from "./ui/component";
import Carousel from "./ui/image-title";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Carousel src="/wallpaper.jpg" alt="project" ligne1="Je suis Valentin" ligne2="Hello," />
      <div className="m-16 text-center text-2xl border-b-4  border-black">
        <h1 className="my-4">Plus d&apos;info sur moi</h1>
      </div>
      <Layout/>
      <div className="m-16 text-center text-2xl border-b-4  border-black">
        <h2 className="my-4">Mes moyens de locomotions</h2>
      </div>    
      <div className="flex flex-col md:flex-row items-center justify-center m-16">
        <div className="m-16">
          <Image
              src="/bicycle-solid.svg"
              alt="bicycle"
              className=" rounded-md"
              width={200}
              height={400}
              priority
          />

        </div>
        <div className="m-16">
          <Image
              src="/bus-solid.svg"
              alt="bus"
              className=" rounded-md"
              width={200}
              height={400}
              priority
          />

        </div>
        
        
      </div>  
    </main>
  );
}
