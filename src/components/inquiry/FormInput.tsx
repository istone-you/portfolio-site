import type { FormInputProps } from "@/types/inquiry";

const FormInput = (props: FormInputProps) => {
  return (
    <div className="mt-10">
      <label className=" center mb-6">
        <div className="px-4 py-1 title-shadow">{props.label}</div>
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
        className="content-card block w-full p-2.5"
      />
    </div>
  );
};

export default FormInput;
