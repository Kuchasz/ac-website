import { type AppType } from "next/dist/shared/lib/utils";
import Head from "next/head";

import "~/styles/globals.css";

const menuItems = [
  { name: "bio", link: "/bio" },
  { name: "discography", link: "/discography" },
  { name: "music", link: "/music" },
  { name: "news", link: "/news" },
  { name: "contact", link: "/contact" },
];

const Menu = () => (
  <div className="flex w-full flex-col">
    <div className="flex w-full flex-row flex-wrap justify-center">
      {menuItems.map((mi) => (
        <a
          key={mi.name}
          // href={mi.link}
          href={"#"}
          className="mx-1 my-1 cursor-pointer self-center px-1 py-1 font-semibold uppercase text-gray-100 drop-shadow-sm transition-all hover:text-red-500 md:mx-4 md:my-3 md:px-4 md:py-3 md:text-lg"
        >
          {mi.name}
        </a>
      ))}
    </div>
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
      <div style={{ backgroundImage: "url('/main_background_photo.jpg')" }} className="flex w-full flex-grow flex-col items-center bg-cover bg-center bg-no-repeat">
        <Menu />
        <Component {...pageProps} />
      </div>
    </>
  );
};

export default MyApp;
