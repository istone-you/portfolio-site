import Image from "next/image";

interface ArticleData {
  title: string;
  detail: string;
  image: {
    url: string;
  };
  url: string;
  comment: number | null;
}

const QiitaArticle = (props: ArticleData) => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div>
          <div
            className="my-6 py-14 px-24 text-black bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700"
            style={{ width: 800 }}
          >
            <a href={props.url}>
              <h1 className="text-xl flex items-center justify-center">
                {props.title}
              </h1>
            </a>
            <div
              dangerouslySetInnerHTML={{
                __html: props.detail,
              }}
              className="mt-4 font-normal"
            />
            <div className="flex items-center justify-center">
              <Image src={props.image.url} alt="" width={300} height={300} />
            </div>
            {props.comment ? (
              <div className="mt-10 flex items-center justify-center bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700">
                <div
                  dangerouslySetInnerHTML={{
                    __html: props.comment,
                  }}
                  className="my-10 font-normal"
                />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QiitaArticle;
