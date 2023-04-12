import { type NextPage } from "next";
import { DiscographyEntry } from "~/components/discography-entry";
import img1 from "../../public/landing_page/Andrew Core.jpg";
import img2 from "../../public/landing_page/IMG_3796.jpg";
import img3 from "../../public/landing_page/andrewcore22.png";
import img4 from "../../public/landing_page/DSC04780.jpg";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col">
      <main className="flex min-h-full flex-col items-center justify-center">
        <div className="grid grid-cols-3">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            <img src="/logo_white.png" className="h-64"></img>
          </h1>
        </div>
      </main>
      <main className="flex h-64 min-h-full w-full flex-col items-center justify-center bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            BIO.
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <span>
              Andrew Core-Tak naprawdę Andrzej Żebro. W 2007 roku zafascynowany
              przygodami swojego starszego brata za konsolą postanowił postawić
              na swoim. Od tego czasu zaczął stawiać pierwsze kroki zarówno w
              mixowaniu jak i w produkcji muzyki. Początki były bardzo trudne,
              ale z czasem Andrzej zaczął łatwo odnajdywać się w tym, co robił.
              W latach 2008-2010 zrealizował kilka inspirujących produkcji,
              które zainteresowały publiczność. Wraz z bratem ma na koncie kilka
              albumów na „własnym” podwórku jak również za granicą w takich
              wytwórniach jak Hamburg Aufmahen oraz „Feet Bass” u Torstena
              Kanzlera wraz z Davidem Dee. Obie Epki zostały wydane pod
              pseudonimem „Typical Twins” czyli Andrzej oraz jego starszy brat
              Krzysztof (John Lecter) Od Roku 2010 do teraz (2022)Andrew Core
              był „nieaktywny” lecz w 2023 postanowił wrócić do branży muzycznej
              co na pewno przełoży się na wiele produkcji w klimatach
              tech-house, house oraz techno.
            </span>
            <div className="grid grid-cols-2 grid-rows-2">
              <div><Image className="object-cover max-h-56 max-w-56 p-1 rounded-lg object-center h-full w-full" src={img1} alt=""></Image></div>
              <div><Image className="object-cover max-h-56 max-w-56 p-1 rounded-lg object-center h-full w-full" src={img2} alt=""></Image></div>
              <div><Image className="object-cover max-h-56 max-w-56 p-1 rounded-lg object-center h-full w-full" src={img3} alt=""></Image></div>
              <div><Image className="object-cover max-h-56 max-w-56 p-1 rounded-lg object-center h-full w-full" src={img4} alt=""></Image></div>
            </div>
          </div>
        </div>
      </main>
      <main className="flex h-64 min-h-full w-full flex-col items-center justify-center bg-black text-white">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            DISCOGRAPHY.
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <span>
              <DiscographyEntry
                date="2023-05-01"
                title="Andrew Core – Space Trumpet EP [Datatech]"
              />
              <DiscographyEntry
                date="2023-03-31"
                title="Andrew Core – Deep Breath incl John Lecter Remix [Oxatech Records]"
              />
              <DiscographyEntry
                date="2023-05-01"
                title="Andrew Core – Space Trumpet EP [Datatech]"
              />
              <DiscographyEntry
                date="2023-03-31"
                title="Andrew Core – Deep Breath incl John Lecter Remix [Oxatech Records]"
              />
              <DiscographyEntry
                date="2023-05-01"
                title="Andrew Core – Space Trumpet EP [Datatech]"
              />
              <DiscographyEntry
                date="2023-03-31"
                title="Andrew Core – Deep Breath incl John Lecter Remix [Oxatech Records]"
              />
              <DiscographyEntry
                date="2023-05-01"
                title="Andrew Core – Space Trumpet EP [Datatech]"
              />
              <DiscographyEntry
                date="2023-03-31"
                title="Andrew Core – Deep Breath incl John Lecter Remix [Oxatech Records]"
              />
            </span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
