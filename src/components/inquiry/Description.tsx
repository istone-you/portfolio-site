import type { Index } from "@/types/index";

const Description = ({ index }: { index: Index }) => {
  return (
    <>
      <p className="flex items-center justify-center">
        お問い合わせフォームです。
      </p>
      <div className="flex flex-wrap">
        <br />
        <p>メールでのお問い合わせは&nbsp;</p>
        <a href={`mailto:${index.email}`} className="hover:no-underline">
          <div className="mr-2 px-2 py-0.5 button-shadow -translate-y-1">
            こちら
          </div>
        </a>
        <p>から、Twitterでのお問い合わせは</p>
        <a href={index.twitter} className="hover:no-underline">
          <div className="mr-2 px-2 py-0.5 button-shadow -translate-y-1">
            こちら
          </div>
        </a>
        <p>からお願いします。</p>
      </div>
    </>
  );
};

export default Description;
