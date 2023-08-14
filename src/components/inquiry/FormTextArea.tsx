import type { FormTextAreaProps } from "@/types/inquiry";

const FormTextArea = (props: FormTextAreaProps) => {
  return (
    <div className="mt-10">
      <label className="flex items-center justify-center mb-6 font-bold text-gray-900">
        <div className="px-4 py-1 title-shadow">{props.label}</div>
      </label>
      <textarea
        value={props.value}
        onChange={props.onChange}
        required
        className="h-40 border-2 border-black rounded-lg text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      />
    </div>
  );
};

export default FormTextArea;
