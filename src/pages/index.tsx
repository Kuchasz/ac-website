import { DisplayDiscographyEntry } from "~/components/display-discography-entry";
import { LightboxImage } from "~/components/lightbox-image";
import andrew from "../../public/landing_page/andrew.png";
import Image from "next/image";
import logoWhite from "../../public/logo_white.png";
import { getThumbByVideoUrl, getYoutubeId } from "~/yt-helpers";
import Link from "next/link";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import { useGlitch } from "react-powerglitch";
import { Monda as Orbitron } from "next/font/google";
import { api } from "~/api";
import {
  type BioPhoto,
  BioPhotoOrderByInput,
  DiscographyEntryOrderByInput,
  type Language,
  NewsEntryOrderByInput,
  VideoOrderByInput,
} from "~/gql";
import { type NewsEntry } from "~/gql";
import { type Video } from "~/gql";
import { type DiscographyEntry } from "~/gql";

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-orbitron",
});

const Home = ({
  bio,
  bioPhotos,
  discography,
  videos,
  news,
}: {
  bio: string;
  bioPhotos: BioPhoto[];
  discography: DiscographyEntry[];
  videos: Video[];
  news: NewsEntry[];
}) => {

  // Glitch effect for the smaller text
  const textGlitch = useGlitch({
    timing: {
      duration: 3500,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: 0.15,
      end: 0.3,
    },
    shake: {
      velocity: 8,
      amplitudeX: 0.06,
      amplitudeY: 0.04,
    },
    slice: {
      count: 4,
      velocity: 16,
      minHeight: 0.1,
      maxHeight: 0.2,
      hueRotate: true,
    },
  });

  const imageGlitch = useGlitch({
    timing: {
      duration: 5000,
      iterations: Infinity,
    },
    glitchTimeSpan: {
      start: 0.2,
      end: 0.4,
    },
    shake: {
      velocity: 64,
      amplitudeX: 0.1,
      amplitudeY: 0.01,
    },
    slice: {
      count: 64,
      velocity: 12,
      minHeight: 0.01,
      maxHeight: 0.12,
      hueRotate: true,
    },
  });

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
          }}>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.03}
          factorY={0.01}
          className="absolute flex h-full w-full items-center justify-center overflow-hidden"
        >
          <span className={`whitespace-nowrap text-[100vh] font-black uppercase text-white opacity-5 select-none ${orbitron.className}`}>
            electronic music producer
          </span>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.2}
          factorY={0.2}
          className="absolute grid h-full grid-rows-5 animate-pulse font-thin opacity-20"
        >
          <div className="mt-64">
            <span
              className={`row-start-2 translate-y-[-10%] text-6xl text-white tracking-wider ${orbitron.className}`}
              ref={textGlitch.ref}
            >
              Electronic Music Producer
            </span>
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild
          factorX={0.07}
          factorY={0.07}
          className="flex h-full items-end"
        >
          <div ref={imageGlitch.ref} className="ml-48">
            <Image
              alt="logo"
              className="max-h-[75vh] scale-125 object-contain"
              height={800}
              src={andrew}
            ></Image>
          </div>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.05} factorY={0.05} className="absolute">
          <div className="grid grid-cols-3">
            <Image
              alt="logo"
              className="col-start-2 max-h-[30vh] object-contain object-center"
              height={500}
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
              {bioPhotos.map((p, index) => (
                <LightboxImage
                  key={p.photo!.url}
                  className="h-full max-h-56 w-full rounded-lg object-cover object-center p-1"
                  height={250}
                  width={250}
                  src={p.photo!.url}
                  alt={`Andrew Core - Bio Photo ${index + 1}`}
                ></LightboxImage>
              ))}
            </div>
          </div>
        </div>
      </main >
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
              <DisplayDiscographyEntry
                key={d.title}
                date={d.releaseDate as unknown as string}
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
                  key={v.title}
                  href={`/news/${v.id}`}
                  className="my-4 flex flex-col items-center md:flex-row"
                >
                  <Image
                    className="mx-4 h-[250px] w-[250px] cursor-pointer object-cover brightness-50 grayscale transition-all hover:brightness-100 hover:grayscale-0 md:max-w-[20rem]"
                    width={250}
                    height={250}
                    src={v.photo.url}
                    alt={""}
                  ></Image>
                  <div className="my-4 flex h-full flex-col justify-center">
                    <div className="text-lg">{v.title}</div>
                    <div className="max-w-xl overflow-hidden text-ellipsis text-xs">
                      {v.content.text.replaceAll("\\n", " ").slice(0, 250)}...
                    </div>
                  </div>
                </Link>
              ))}
            </div>
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
              {videos.map((v) => (
                <Link
                  key={v.youtubeUrl}
                  href={`/video/${getYoutubeId(v.youtubeUrl)}`}
                >
                  <Image
                    className="max-w-[15rem] cursor-pointer brightness-50 grayscale transition-all hover:brightness-100 hover:grayscale-0"
                    src={getThumbByVideoUrl(v.youtubeUrl)}
                    alt={`YouTube video thumbnail`}
                    width={240}
                    height={180}
                  />
                </Link>
              ))}
            </div>
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
            <Link href="mailto:typicaltwins@gmail.com">
              typicaltwins@gmail.com
            </Link>
          </div>
        </div>
      </main>
    </div >
  );
};

export async function getStaticProps() {
  const { discographyEntries } = await api.discographyEntries({
    orderBy: DiscographyEntryOrderByInput.ReleaseDateDesc,
  });

  const { videos } = await api.videos({
    orderBy: VideoOrderByInput.CreatedAtDesc,
    first: 4,
  });

  const { bioPhotos } = await api.bioPhotos({
    orderBy: BioPhotoOrderByInput.CreatedAtDesc,
    first: 12,
  });

  const {
    siteContents: [siteContent],
  } = await api.about({ language: "en" as Language });

  const {
    content: { html: bio },
  } = siteContent!;

  const { newsEntries } = await api.newsEntries({
    orderBy: NewsEntryOrderByInput.CreatedAtDesc,
  });

  return {
    props: {
      bio,
      bioPhotos,
      discography: discographyEntries,
      videos,
      news: newsEntries,
    },
    revalidate: 10,
  };
}

export default Home;
