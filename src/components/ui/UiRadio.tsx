import { ChangeEventHandler } from "react";

interface Props {
  label: string;
  id: string;
  value: number;
  onChange: ChangeEventHandler<HTMLInputElement>;
  description: string;
  name: string;
}

const UiRadio = ({ label, id, value, onChange, description, name }: Props) => {
  return (
    <div className="relative flex items-start">
      <div className="flex items-center h-5">
        <input
          id={id}
          name={name}
          type="radio"
          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
          value={value}
          onChange={onChange}
        />
      </div>
      <div className="ml-3 text-sm">
        <label
          htmlFor={id}
          className="cursor-pointer font-medium text-gray-700"
        >
          {label}
        </label>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default UiRadio;