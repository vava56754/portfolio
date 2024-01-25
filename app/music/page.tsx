import Carousel from "../ui/image-title"
import Square from "../ui/square"
import Image from "next/image"

export default function Music() {
    return (
        <div>
            <Carousel src="/turntable.jpg" alt="project" ligne1="La Musique" ligne2="" />
            <div className="m-16 text-center text-2xl border-b-4  border-black">
                <h1 className="my-4">Mon EP (extended play)</h1>
            </div>
            <div className="text-center text-xl">
                <p>Au cours de mon année sabbatique j&apos;ai réalisé un EP instrumental appelé <strong>&apos;DOUBLE FACE&apos;</strong> dans les styles Pop Rock, Electro et Lofi.</p>
                <p>Des styles qui s&apos;écoutent facilement en fond comme par exemple lorsqu&apos;on développe !</p>
            </div>
            <div className="my-8 flex flex-col justify-center items-center">
                <Image
                    src="/double-face.jpg"
                    alt="double-face"
                    className="rounded-md"
                    width={500}
                    height={400}
                    priority
                />
                <h2 className=" my-8 text-center text-xl">Double Face</h2>
            </div>
            <div className="m-16 text-center text-xl border-b-2  border-black">
                <h2 className="my-4">Ecouter Sur</h2>
            </div>
            <div className="flex flex-col justify-center md:flex-row my-32 gap-8">
                <Square
                title="Spotify"
                content={
                    <div className="aspect-w-16 aspect-h-9 w-full my-8">
                        <iframe 
                            title="spotify"
                            style={{ borderRadius: '12px' }} 
                            src="https://open.spotify.com/embed/artist/2S4WRai0bT8xOwNWBwAK1G?utm_source=generator" 
                            width="100%" 
                            height="352" 
                            frameBorder="0" 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy">
                        </iframe>
                    </div>
                }/>
                <Square
                    title="Youtube"
                    content={
                        <div className="aspect-w-16 aspect-h-9 w-full my-8">
                            <iframe 
                                width="560" 
                                height="315" 
                                src="https://www.youtube.com/embed/videoseries?si=Tzbz7PVnMSvWwapx&amp;list=OLAK5uy_l4rn6gDhm1JjpsfywvxhcBP1hyD9QNVhw" 
                                title="YouTube video player" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
                            </iframe>
                        </div>
                }/>
                <Square
                    title="Deezer"
                    content={
                        <div className="aspect-w-16 aspect-h-9 w-full my-8">
                            <iframe 
                                className="rounded-mb"
                                title="deezer-widget" 
                                src="https://widget.deezer.com/widget/dark/artist/242194491/top_tracks" 
                                width="100%" 
                                height="300" 
                                allow="encrypted-media; clipboard-write">
                            </iframe>
                        </div>
                }/>
            </div>
        </div>
    )
}