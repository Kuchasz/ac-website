import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import beatport from "../../public/icons/beatport.svg";
import instagram from "../../public/icons/instagram.svg";
import linktree from "../../public/icons/linktree.svg";
import soundcloud from "../../public/icons/soundcloud.svg";
import tiktok from "../../public/icons/tiktok.svg";
import youtube from "../../public/icons/youtube.svg";

import "~/styles/globals.css";
import Image from "next/image";
import Link from "next/link";

const menuItems = [
  { name: "bio", link: "/bio" },
  { name: "discography", link: "/discography" },
  { name: "music", link: "/music" },
  { name: "news", link: "/news" },
  { name: "contact", link: "/contact" },
];

const socialItems = [
  { icon: soundcloud, link: "https://soundcloud.com/andrewcoremusic" },
  { icon: youtube, link: "https://www.youtube.com/@andrewcoremusic" },
  { icon: instagram, link: "https://www.instagram.com/andrewcore20/" },
  { icon: tiktok, link: "https://www.tiktok.com/@andrewcoremusic" },
  { icon: linktree, link: "https://linktr.ee/andrewcoremusic" },
  { icon: beatport, link: "https://www.beatport.com/artist/andrew-core/90019" },
];

const Menu = () => (
  <div className="flex flex-row flex-wrap gap-6">
    {menuItems.map((mi) => (
      <a
        key={mi.name}
        href={mi.link}
        className="cursor-pointer self-center font-semibold uppercase text-gray-100 drop-shadow-sm transition-all hover:text-red-500"
      >
        {mi.name}
      </a>
    ))}
  </div>
);

const Social = () => (
  <div className="flex flex-row flex-wrap gap-6">
    {socialItems.map((mi) => (
      <Link key={mi.icon} href={mi.link}>
        <Image alt="" src={mi.icon} width={20}></Image>
      </Link>
    ))}
  </div>
);

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Andrew Core - electronic music producer</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        style={{
          backgroundImage: "url('/main_background_photo.jpg')",
        }}
        className="flex w-full flex-grow flex-col items-center bg-cover bg-top bg-no-repeat"
      >
        <div className="flex w-full justify-between bg-black px-6 py-6">
          <Menu />
          <Social />
        </div>
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
