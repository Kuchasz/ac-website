import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import { ScrollLink } from "~/components/scroll-link";

const menuItems = [
  { name: "bio", link: "#bio" },  
  { name: "discography", link: "#discography" },
  { name: "news", link: "#news" },
  { name: "music", link: "#music" },
  { name: "contact", link: "#contact" },
] as const;

const socialItems = [
  {
    icon: "/icons/soundcloud.svg",
    link: "https://soundcloud.com/andrewcoremusic",
  },
  {
    icon: "/icons/youtube.svg",
    link: "https://www.youtube.com/@andrewcoremusic",
  },
  {
    icon: "/icons/instagram.svg",
    link: "https://www.instagram.com/andrewcore20/",
  },
  {
    icon: "/icons/tiktok.svg",
    link: "https://www.tiktok.com/@andrewcoremusic",
  },
  { icon: "/icons/linktree.svg", link: "https://linktr.ee/andrewcoremusic" },
  {
    icon: "/icons/beatport.svg",
    link: "https://www.beatport.com/artist/andrew-core/90019",
  },
];

const Menu = () => {
  return (
    <div className="flex flex-row flex-wrap gap-6">
      {menuItems.map((mi) => (
        <ScrollLink
          key={mi.name}
          href={mi.link}
          className="cursor-pointer self-center font-semibold uppercase text-gray-100 drop-shadow-sm transition-all hover:text-red-500"
        >
          {mi.name}
        </ScrollLink>
      ))}
    </div>
  );
};

const Social = () => (
  <div className="flex flex-row flex-wrap gap-6">
    {socialItems.map((mi) => (
      <Link key={mi.icon} href={mi.link}>
        <Image alt="" src={mi.icon} width={20} height={20}></Image>
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
      <div className="flex w-full flex-grow flex-col items-center">
        <div className="fixed z-10 flex w-full justify-between bg-black px-6 py-6">
          <Menu />
          <Social />
        </div>
        <Component {...pageProps} />
        <footer className="w-full py-8 text-center text-sm text-white">
          <div>{`© ${new Date().getFullYear()} andrewcoremusic.com`}</div>
          <div className="text-gray-700">All Rights Reserved</div>
        </footer>
      </div>
    </>
  );
};

export default MyApp;
