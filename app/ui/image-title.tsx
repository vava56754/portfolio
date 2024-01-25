'use client'
import Image from "next/image";

const Carousel: React.FC<{ src: string; alt: string; ligne1: string; ligne2: string}> = ({ src, alt, ligne1, ligne2 }) => {
    return (
      <div className="relative flex flex-col items-center justify-between">
        <Image
            src={src}
            alt={alt}
            style={{ objectFit: 'cover', width: '100%', height: '700px' }}
            width={1920}
            height={1080}
            priority
        />
        <div className="absolute inset-0 flex flex-row gap-96 items-center justify-center m-10 h-[620px]">
          <div className="text-black text-2xl md:text-4xl lg:text-5xl">
            <h1 className="my-10">{ligne2}</h1>
            <h1>{ligne1}</h1>
            <div className="my-10">
              
            </div>
            
          </div>
        </div>
        <div>
            <button className="mt-8 bg-black text-white px-3 py-1 rounded" onClick={() => window.scrollTo({ top: 640, behavior: "smooth" })}>
                En savoir plus
            </button>
        </div>   
      </div>
    );
}

export default Carousel;