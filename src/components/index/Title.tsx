import Image from "next/image";

interface TitleData {
  thumbnail: {
    url: string;
  };
  greeting: string;
  thanks: string;
}

const Title = (props: TitleData) => {
  return (
    <>
      <div className=" flex items-center justify-center">
        <Image
          src={props.thumbnail.url}
          alt="thumbnail"
          width={64}
          height={64}
          className="mt-12 mb-6 rounded-full border border-black"
        />
      </div>
      <h1 className="sm:text-2xl mb-12 flex items-center justify-center">
        {props.greeting}
      </h1>
      <p className="sm:text-xs md:text-xl lg:text-xl xl:text-xl font-normal flex items-center justify-center">
        <b>{props.thanks}</b>
      </p>
    </>
  );
};

export default Title;
