import { UiSelectProps } from "./type";

const UiSelect = ({
  label,
  id,
  values,
  register,
  defaultValue,
}: UiSelectProps) => {
  return (
    <div className="col-span-3">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div>
        <select {...register} name={id} id={id} defaultValue={defaultValue}>
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
