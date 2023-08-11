import Image from "next/image";

interface TitleData {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
}

const Title = (props: TitleData) => {
  console.log(props);
  return (
    <>
      <div className="flex items-center justify-center">
        <Image
          src={props.thumbnail.url}
          alt="thumbnail"
          width={64}
          height={64}
          className="mt-12 mb-6 rounded-full border border-black"
        />
      </div>
      <h1 className="text-4xl mb-12 flex items-center justify-center">
        {props.greeting}
      </h1>
      <p className="flex items-center justify-center">
        <b>{props.thanks}</b>
      </p>
    </>
  );
};

export default Title;
