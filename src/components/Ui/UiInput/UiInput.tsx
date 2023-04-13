import { UiInputProps } from "./type";

const UiInput = ({ label, id, value, onChange }: UiInputProps) => {
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type="text"
        className="w-full border border-gray-300 rounder-md h-10 p-2 focus:ring-indigo-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default UiInput;
