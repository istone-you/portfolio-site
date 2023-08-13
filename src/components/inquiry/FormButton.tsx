import type { FormButtonProps } from "@/types/inquiry";

const FormButton = (props: FormButtonProps) => {
  return (
    <div className="mt-6 flex items-center justify-center">
      <button
        type={props.type}
        className="bg-gray-300 px-4 py-1 font-bold border border-black button-shadow hover:shadow-none hover:translate-y-1 hover:translate-x-1"
      >
        {props.label}
      </button>
    </div>
  );
};

export default FormButton;
