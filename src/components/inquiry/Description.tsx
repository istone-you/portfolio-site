import type { Index } from "@/types/index";

const Description = ({ index }: { index: Index }) => {
  return (
    <p className="fade-in-first max-w-3xl mx-auto px-6 text-center">
      お問い合わせフォームです。
      <br />
      メールでのお問い合わせは
      <a href={`mailto:${index.email}`}>こちら</a>
      から、Twitterでのお問い合わせは<a href={index.twitter}>こちら</a>
      からお願いします。
    </p>
  );
};

export default Description;
