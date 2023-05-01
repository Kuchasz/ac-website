import { GetStaticPropsContext, NextPageContext } from "next";
import { useRouter } from "next/router";
import { api } from "~/api";
import { NewsEntry, NewsEntryOrderByInput } from "~/gql";

const News = ({ news }: { news: NewsEntry }) => {
  return (
    <main
      id="news"
      className="my-24 flex min-h-[50vh] w-full flex-col items-center justify-center text-white"
    >
      <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          {news?.title}
        </h1>
        <div className="flex flex-col items-center">
          <img
            className="max-w-[10rem] cursor-pointer object-cover brightness-50 grayscale transition-all hover:brightness-100 hover:grayscale-0 md:max-w-[40rem]"
            src={news?.photo?.url}
          ></img>
          <div className="mt-8 flex flex-col justify-center">
            <div dangerouslySetInnerHTML={{ __html: news.content.html }}></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default News;

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const news = await api.newsEntry({ id: params!.id! as string });

  console.log(news);

  return {
    props: {
      news: news.newsEntry,
    },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const { newsEntries } = await api.newsEntries({
    orderBy: NewsEntryOrderByInput.CreatedAtDesc,
  });

  return {
    paths: newsEntries.map((e) => ({ params: { id: e.id } })),
    fallback: false, // can also be true or 'blocking'
  };
}
