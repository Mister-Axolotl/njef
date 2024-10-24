import Image from "next/image";
import { ArrowDownIcon } from "@heroicons/react/16/solid";

export default function Home() {
  return (
    <div className="container">
      <div className="hero">
        <a href="#content" id="more-info">
          Plus d&apos;infos
          <ArrowDownIcon className="arrow size-10" />
        </a>
        <div className="transition"></div>
      </div>
      <div className="content" id="content">
        <div className="message">
          <h1 className="text-blue-900">À vos agendas !</h1>
          <div className="mt-6 text-left">
            <p className="text-lg text-gray-100">
              <span className="font-bold">
                Chers Amis, <br />
                Le prochain congrès NJEF se déroulera les :{" "}
                <span className="" id="underline">
                  31 janvier - 1er et 2 février 2025
                </span>
              </span>
              <br />
              <br />
              Le foetus, c&apos;est le CFEF !
            </p>
            <p className="mt-4 text-gray-300">
              A bientôt,
              <br />
              Le bureau du CFEF
              <br />
              Les organisateurs
            </p>
          </div>
          <br />
          <Image
            className="calendar"
            src="/calendrier.png"
            alt="calendrier"
            width={600}
            height={600}
          />
        </div>
        <div className="articles">
          <a href="https://cfef.org/NJEF.php">
            Accès aux vidéos des éditions précédentes
          </a>
          <a href="">Plus d&apos;informations</a>
          <a href="">Grégory</a>
        </div>
      </div>
    </div>
  );
}
