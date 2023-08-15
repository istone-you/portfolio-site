import type { Index } from "@/types/index";

const Description = ({ index }: { index: Index }) => {
  return (
    <div className="fade-in-second font-bold">
      <p className="center">お問い合わせフォームです。</p>
      <div className="center-wrap">
        <p className="center-wrap">
          メールでのお問い合わせは&nbsp;
          <a href={`mailto:${index.email}`} className="no-underline group">
            <div className="mr-3 px-2 py-0.5 button-shadow">こちら</div>
          </a>
        </p>
        <p className="center-wrap">
          Twitterでのお問い合わせは&nbsp;
          <a
            href={index.twitter}
            className="no-underline group"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            <div className="mr-2 px-2 py-0.5 button-shadow">こちら</div>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Description;
