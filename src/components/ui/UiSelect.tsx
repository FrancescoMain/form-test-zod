import { ChangeEventHandler } from "react";

export interface selectValue {
  id: number;
  name: string;
  default?: boolean;
}

interface Props {
  label: string;
  id: string;
  values: selectValue[];
  onChange: ChangeEventHandler<HTMLSelectElement>;
  defaultValue: number;
}

const UiSelect = ({ label, id, values, onChange, defaultValue }: Props) => {
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <select
          name={id}
          id={id}
          onChange={onChange}
          defaultValue={defaultValue}
        >
          {values.map((value) => {
            return (
              <option key={value.id} value={value.id}>
                {value.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default UiSelect;
