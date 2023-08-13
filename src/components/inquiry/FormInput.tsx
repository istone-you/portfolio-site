import type { FormInputProps } from "@/types/inquiry";

const FormInput = (props: FormInputProps) => {
  return (
    <div className="mt-10">
      <label className=" flex items-center justify-center mb-6 font-bold text-gray-900">
        <div className="px-4 py-1 button-shadow border border-black">
          {props.label}
        </div>
      </label>
      <input
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        required
        className="border-2 border-black rounded-lg text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};

export default FormInput;
