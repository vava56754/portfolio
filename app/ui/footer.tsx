export default function Footer() {
    return (
        <div className="flex flex-col bg-black text-white justify-center p-8 gap-32 md:flex-row">
            <div>
                <h2 className="text-3xl font-bold mb-4">Me contacter</h2>
                <div className="mb-4">
                    <p className="text-lg font-semibold">Adresse mail</p>
                    <p>valent.peyratout@gmail.com</p>
                </div>

                <div>
                    <p className="text-lg font-semibold">Téléphone</p>
                    <p>07 82 98 90 00</p>
                </div>
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-4">Mes réseaux</h2>
                <div className="mb-4">
                    <p className="text-lg font-semibold">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/valentin-peyratout/">Valentin Peyratout</a>
                </div>
                <div className="mb-4">
                    <p className="text-lg font-semibold">Instagram</p>
                    <a href="https://www.instagram.com/valentin_peyratout/">TheVal</a>
                </div>
            </div>
            
        </div>
    );
}