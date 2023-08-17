import type { FormButtonProps } from "@/types/inquiry";

const FormButton = (props: FormButtonProps) => {
  return (
    <div className="mt-6 center">
      <div className="group">
        <button
          type={props.type}
          className="text-black px-4 py-1 button-shadow"
        >
          {props.label}
        </button>
      </div>
    </div>
  );
};

export default FormButton;
