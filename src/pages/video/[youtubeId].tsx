import { useRouter } from "next/router";

const YoutubeVideo = ({ url }: { url: string }) => (
  <iframe
    className="my-4 w-full max-w-3xl bg-black"
    width="300px"
    height="400px"
    src={`https://www.youtube.com/embed/${url}`}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Video = () => {
  const id = useRouter().query.youtubeId! as string;

  return (
    <main
      id="news"
      className="mt-24 flex bg-gradient-to-t from-gray-900 min-h-[50vh] w-full flex-col items-center justify-center text-white"
    >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          VIDEO.
        </h1>
        <YoutubeVideo key={id} url={id} />
      </div>
    </main>
  );
};

export default Video;
