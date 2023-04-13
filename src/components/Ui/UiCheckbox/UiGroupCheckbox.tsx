import { useEffect, useState } from "react";
import UiCheckbox from "./UiCheckbox";
import { GroupCheckboxProps } from "./type";

export const UiGroupCheckbox = ({
  values,
  onChange,
  title,
}: GroupCheckboxProps) => {
  const [selected, setSelected] = useState([] as number[]);

  useEffect(() => {
    onChange(selected);
  }, [selected]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const val = Number(event.target.value);
    const checked = Number(event.target.checked);

    if (!checked) {
      setSelected([...selected.filter((i) => i !== val)]);
    } else {
      setSelected([...selected, val]);
    }
  };
  return (
    <div className="mb-4">
      <fieldset>
        <legend className="text-base font-medium text-gray-900">{title}</legend>
        <div className="mt-4 space-y-4">
          {values.map((checkBox) => {
            return (
              <UiCheckbox
                key={checkBox.id}
                id={checkBox.id}
                label={checkBox.label}
                description={checkBox.description}
                value={checkBox.value}
                onChange={handleChange}
              />
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};
