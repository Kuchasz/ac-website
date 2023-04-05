import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className="flex h-full flex-grow flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
          ANDREW <span className="text-red-500">CORE.</span>
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8"></div>
      </div>
    </main>
  );
};

export default Home;
