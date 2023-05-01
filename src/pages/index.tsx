import { type NextPage } from "next";
import { DiscographyEntry } from "~/components/discography-entry";
import img1 from "../../public/landing_page/Andrew Core.jpg";
import img2 from "../../public/landing_page/IMG_3796.jpg";
import img3 from "../../public/landing_page/andrewcore22.png";
import img4 from "../../public/landing_page/DSC04780.jpg";
import andrew from "../../public/landing_page/andrew.png";
import Image from "next/image";
import logoWhite from "../../public/logo_white.png";
import { getThumbByVideoUrl, getYoutubeId } from "~/yt-helpers";
import Link from "next/link";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { api } from "~/api";
import {
  DiscographyEntryOrderByInput,
  Language,
  VideoOrderByInput,
} from "~/gql";

const movies = [
  { youtubeUrl: "https://www.youtube.com/embed/o2yHZDO8vMo" },
  { youtubeUrl: "https://www.youtube.com/embed/ljF337Y8544" },
  { youtubeUrl: "https://www.youtube.com/embed/0654SQ29CQA" },
  { youtubeUrl: "https://www.youtube.com/embed/XpjMx2GDCIk" },
];

const news = [
  {
    youtubeUrl: "https://www.youtube.com/embed/o2yHZDO8vMo",
    title: "Lorem, ipsum dolor sit amet consectetur adipisicing elit",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita quisquam aliquid deleniti id. Quos nam dolore qui similique non neque tempore, cum ipsum totam facere porro odio asperiores aspernatur officia.",
  },
  {
    youtubeUrl: "https://www.youtube.com/embed/ljF337Y8544",
    title: "Sequi ea veniam a ipsam, necessitatibus cum error",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam temporibus animi consequatur. Reprehenderit labore ad iste sed eveniet fuga porro totam, esse quis optio rem incidunt quasi quos facilis aliquam?",
  },
];

const Home = ({
  bio,
  discography,
  videos,
}: {
  bio: string;
  discography: { title: string; releaseDate: string }[];
  videos: { youtubeUrl: string }[];
}) => {
  return (
    <div className="flex w-full flex-col">
      <MouseParallaxContainer className="flex min-h-[100vh] w-full flex-col items-center justify-center bg-cover bg-top bg-no-repeat">
        <MouseParallaxChild
          factorX={0.01}
          factorY={0.01}
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(40,40,40,1) 0%, rgba(0,0,0,1) 50%)",
            width: "100%",
            height: "100%",
            transform: "scale(1.1)",
            position: "absolute",
            backgroundSize: "fill",
            backgroundRepeat: "repeat",
            backgroundPosition: "center",
          }}
        ></MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.07}
          factorY={0.07}
          className="absolute grid h-full grid-rows-5 font-thin"
        >
          <span className="row-start-2 translate-x-[-25%] translate-y-[-25%] text-6xl uppercase text-white opacity-10">
            electronic music producer
          </span>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          className="flex h-full items-end"
        >
          <Image
            alt="logo"
            className="ml-48 max-h-[75vh] scale-125 object-contain"
            src={andrew}
          ></Image>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.15} factorY={0.15} className="absolute">
          <div className="grid grid-cols-3">
            <Image
              alt="logo"
              className="col-start-2 max-h-[30vh] object-contain object-center"
              src={logoWhite}
            ></Image>
          </div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
      <main
        id="bio"
        className="my-24 flex min-h-[50vh] w-full flex-col items-center justify-center text-white"
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            BIO.<div className="my-4"></div>
          </h1>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
            <div dangerouslySetInnerHTML={{ __html: bio }}></div>
            <div className="grid grid-cols-2 grid-rows-2">
              <Image
                className="max-w-56 h-full max-h-56 w-full rounded-lg object-cover object-center p-1"
                src={img1}
                alt=""
              ></Image>
              <Image
                className="max-w-56 h-full max-h-56 w-full rounded-lg object-cover object-center p-1"
                src={img2}
                alt=""
              ></Image>
              <Image
                className="max-w-56 h-full max-h-56 w-full rounded-lg object-cover object-center p-1"
                src={img3}
                alt=""
              ></Image>
              <Image
                className="max-w-56 h-full max-h-56 w-full rounded-lg object-cover object-center p-1"
                src={img4}
                alt=""
              ></Image>
            </div>
          </div>
        </div>
      </main>
      <main
        id="discography"
        className="my-24 flex min-h-[50vh] w-full flex-col items-center justify-center text-white"
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            DISCOGRAPHY.
          </h1>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {discography.map((d) => (
              <DiscographyEntry
                key={d.title}
                date={d.releaseDate}
                title={d.title}
              />
            ))}
          </div>
        </div>
      </main>
      <main
        id="news"
        className="my-24 flex min-h-[50vh] w-full flex-col items-center justify-center text-white"
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            NEWS.
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-col justify-center gap-x-4">
              {news.map((v) => (
                <Link
                  key={v.youtubeUrl}
                  href={`/video/${getYoutubeId(v.youtubeUrl)}`}
                  className="flex"
                >
                  <img
                    className="max-w-[10rem] cursor-pointer object-cover brightness-50 grayscale transition-all hover:brightness-100 hover:grayscale-0 md:max-w-[20rem]"
                    src={getThumbByVideoUrl(v.youtubeUrl)}
                  ></img>
                  <div className="ml-4 flex flex-col justify-center">
                    <div className="text-lg">{v.title}</div>
                    <div className="text-xs">{v.content}</div>
                  </div>
                </Link>
              ))}
            </div>
            {/* <Link href="/videos">
              <button className="border-1 mt-8 rounded-md border px-6 py-2 hover:bg-gray-700">
                {translations.seeMore}
              </button>
            </Link> */}
          </div>
        </div>
      </main>
      <main
        id="music"
        className="my-24 flex min-h-[50vh] w-full flex-col items-center justify-center text-white"
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            MUSIC.
          </h1>
          <div className="flex flex-col items-center">
            <div className="flex flex-wrap justify-center gap-x-4">
              {movies.map((v) => (
                <Link
                  key={v.youtubeUrl}
                  href={`/video/${getYoutubeId(v.youtubeUrl)}`}
                >
                  <img
                    className="max-w-[15rem] cursor-pointer brightness-50 grayscale transition-all hover:brightness-100 hover:grayscale-0"
                    src={getThumbByVideoUrl(v.youtubeUrl)}
                  ></img>
                </Link>
              ))}
            </div>
            {/* <Link href="/videos">
              <button className="border-1 mt-8 rounded-md border px-6 py-2 hover:bg-gray-700">
                {translations.seeMore}
              </button>
            </Link> */}
          </div>
        </div>
      </main>
      <main
        id="contact"
        className="my-24 flex min-h-[50vh] w-full flex-col items-center justify-center text-white"
      >
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
            CONTACT.
          </h1>
          <div className="">
            <span>typicaltwins@gmail.com</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export async function getStaticProps({ locale }: { locale: string }) {
  const { discographyEntries } = await api.discographyEntries({
    orderBy: DiscographyEntryOrderByInput.ReleaseDateDesc,
  });

  const { videos } = await api.videos({
    orderBy: VideoOrderByInput.CreatedAtDesc,
    first: 4,
  });

  const {
    siteContents: [siteContent],
  } = await api.about({ language: "en" as Language });

  const {
    content: { html: bio },
  } = siteContent!;

  return {
    props: {
      bio,
      discography: discographyEntries,
      videos,
    },
    revalidate: 10,
  };
}

export default Home;
