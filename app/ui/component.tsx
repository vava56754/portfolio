'use client'
import Image from "next/image";
import Square from "../ui/square"


const SkillImage: React.FC<{ src: string; alt: string; label: string }> = ({ src, alt, label }) => {
    return (
      <div className="flex flex-col items-center mx-4 my-4 md:my-0">
        <div className="flex-shrink-0">
          <Image src={src} alt={alt} width={100} height={100} priority />
        </div>
        <div className="mt-4 text-center">
          <p>{label}</p>
        </div>
      </div>
    );
};

const Layout: React.FC = () => {
  return (
        <div className='flex flex-col justify-center md:flex-row my-32 gap-8'>
        <Square
            title="Mon Histoire"
            content={
                <div className="flex flex-col items-center  p-8">
      <div className="flex flex-col bg-white rounded-lg p-8 max-w-3xl text-justify">
        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Lycée</h3>
          <p>
            Ma première expérience avec le développement remonte au lycée. Ayant fait STI2D, j'ai vite manipulé les cartes Arduinos avec un langage pseudo-C et le Python avec Raspberry.
          </p>
          <p>Une belle découverte qui me guidera jusqu'en BTS SIO (services informatiques aux organisations).</p>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">BTS SIO</h3>
          <p>
            Pendant la première année de BTS, je me suis formé à la programmation orientée objet ainsi qu'à l'utilisation de HTML, CSS, et JavaScript.
          </p>
          <p>J'ai aussi acquis des compétences sur le langage SQL et sur l'utilisation des bases de données relationnelles.</p>
          <p>En parallèle, j'apprenais l'utilisation de Linux ainsi que l'utilisation du bash, shell, etc.</p>
          <p>A la deuxième année, nous commençons à faire des sites dynamiques avec un côté client/serveur et une communication avec des bases de données. J'ai découvert Git pour la gestion de version et j'ai pu utiliser GitLab et GitHub.</p>
          <p>Découverte des requêtes préparées en amont du CRUD.</p>
        </section>

        <section className="mb-8">
          <h4 className="text-2xl font-bold mb-2">Stage de BTS</h4>
          <p>
            Il y a eu un stage lors de la deuxième année où j'ai pu mettre en pratique mes connaissances. J'ai dû réaliser un site web de A à Z en PHP, JavaScript, HTML et CSS.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Licence Professionnelle DAWIN</h2>
          <p>
            J'ai réalisé cette licence en alternance dans l'entreprise CGI dans le service qui s'occupe des ENT comme par exemple Lycée Connecté, ENT 77.
          </p>
          <p>Mes principales missions au sein du service étaient des évolutions de micro applications en utilisant des technologies comme Java avec le Framework Vert.X et du TypeScript avec Angular.</p>
          <p>Cette année m'a apporté beaucoup sur ma façon de travailler, de m'organiser, de communiquer.</p>
          <p>En parallèle en licence, j'ai découvert de nombreuses technologies comme Vue.js, Laravel, Ruby, NestJS.</p>
          <p>J'ai aussi découvert différentes méthodes agiles que j'ai eu la chance de pratiquer en entreprise.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-bold mb-4">Mon année sabbatique</h2>
          <p>
            À la fin de ma licence, j'ai décidé de prendre une année sabbatique pour me concentrer sur une autre passion, la musique.
          </p>
          <p>
            En effet, j'ai pris cette année sabbatique pour progresser dans le domaine de la musique aussi bien sur le plan théorique que technique.
          </p>
          <p>
            À la moitié de l'année, j'ai décidé de faire un EP (mini album) pour mettre en pratique mes connaissances et partager ma vision de la musique que j'aime.
          </p>
        </section>
      </div>
    </div>
            }
      />
      <Square
        title="Mes Compétences"
        content={
            <div className="flex flex-col items-center p-8">
      <div className="flex flex-col bg-white rounded-lg p-8 max-w-3xl">
        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Programmation</h3>
          <p>Utilisation de la programmation orientée objet</p>
          <p>Développement Full Stack</p>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Langages et Frameworks</h3>
          <p>Utilisation de langages tels que:</p>
          <div className="flex flex-col md:flex-row md:my-8">
            <SkillImage src="/java-4-logo.svg" alt="Java Logo" label="Java" />
            <SkillImage src="/php-1-logo.svg" alt="PHP Logo" label="PHP" />
          </div>

          <p>Utilisation de Frameworks tels que:</p>
          <div className="flex flex-col md:flex-row md:my-8 items-baseline">
            <SkillImage src="/NestJS.svg" alt="NestJS Logo" label="NestJS" />
            <SkillImage src="/Angular_full_color_logo.svg" alt="Angular Logo" label="Angular" />
            <SkillImage src="/Vert.x_Logo.svg" alt="Vert.x Logo" label="Vert.X" />
            <SkillImage src="/Spring_Framework_Logo_2018.svg" alt="Spring Logo" label="Spring" />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Outils de développement</h3>
          <p>Utilisation de :</p>
          <div className="flex flex-col md:flex-row md:my-8 items-baseline">
            <SkillImage src="/Git-logo.svg" alt="Git Logo" label="Git" />
            <SkillImage src="/docker.svg" alt="Docker Logo" label="Docker" />
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Méthodologies</h3>
          <p>Utilisation de méthodes agiles (Scrum, cycle en V)</p>
        </section>

        <section className="mb-8">
          <h3 className="text-3xl font-bold mb-4">Gestion de base de données</h3>
          <p>SQL (MySQL, PostgreSQL)</p>
          <p>NoSQL (MongoDB)</p>
        </section>

        <section>
          <h3 className="text-3xl font-bold mb-4">Test et Débogage</h3>
          <p>Tests unitaires</p>
          <p>Capacité à déboguer des problèmes complexes</p>
        </section>
      </div>
    </div>
        }
      />
    </div>
  );
};

export default Layout;
