import { UiTextAreaProps } from "./type";

const UiTextArea = ({ label, id, register, subtitle }: UiTextAreaProps) => {
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <textarea
          {...register}
          rows={3}
          id={id}
          name={id}
          className="w-full border border-gray-300 rounder-md p-2 focus:ring-indigo-500"
        />
      </div>
      <p className="mt-2 text-sm text-gray-500">{subtitle}</p>
    </div>
  );
};

export default UiTextArea;
