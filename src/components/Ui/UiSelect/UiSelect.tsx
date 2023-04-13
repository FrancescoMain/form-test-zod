import { UiSelectProps } from "./type";

const UiSelect = ({
  label,
  id,
  values,
  onChange,
  defaultValue,
}: UiSelectProps) => {
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
