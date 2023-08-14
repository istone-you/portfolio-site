import type { Index } from "@/types/index";

const Description = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-second">
      <p className="flex items-center justify-center">
        お問い合わせフォームです。
      </p>
      <div className="flex flex-wrap items-center justify-center">
        <div className="flex flex-wrap items-center justify-center">
          <p>メールでのお問い合わせは&nbsp;</p>
          <a href={`mailto:${index.email}`} className="no-underline">
            <div className="mr-2 px-2 py-0.5 button-shadow -translate-y-2">
              こちら
            </div>
          </a>
        </div>
        <div className="flex flex-wrap items-center justify-center">
          <p>Twitterでのお問い合わせは</p>
          <a href={index.twitter} className="no-underline">
            <div className="mr-2 px-2 py-0.5 button-shadow -translate-y-2">
              こちら
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Description;
