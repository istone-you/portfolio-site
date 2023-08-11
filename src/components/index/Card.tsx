import Link from "next/link";

interface CardProps {
  path: string;
  title: string;
  detail: string;
}

const Card = (props: CardProps) => {
  return (
    <div className="px-12">
      <Link href={props.path} className="hover:no-underline">
        <div className="mb-1 mt-10 mx-auto py-4 px-10 h-32 w-72 text-black bg-white border-2 border-gray-200 rounded-lg dark:border-gray-700 transition-transform duration-300 transform hover:-translate-y-1">
          <p>
            <span className="text-lg">{props.title}</span>
            <br />
            <span className="text-sm font-normal">{props.detail}</span>
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
