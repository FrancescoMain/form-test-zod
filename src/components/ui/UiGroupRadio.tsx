import UiRadio from "./UiRadio";

export interface uiGroupCheckboxValue {
  id: string;
  label: string;
  value: number;
  description: string;
}

interface Props {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  values: uiGroupCheckboxValue[];
  title: string;
  name: string;
}

const UiGroupRadio = ({ values, onChange, title, name }: Props) => {
  return (
    <div className="mb-4">
      <fieldset>
        <legend className="text-base font-medium text-gray-900">{title}</legend>
        <div className="mt-4 space-y-4">
          {values.map((radio) => {
            return (
              <UiRadio
                key={radio.id}
                id={radio.id}
                label={radio.label}
                description={radio.description}
                value={radio.value}
                onChange={onChange}
                name={name}
              />
            );
          })}
        </div>
      </fieldset>
    </div>
  );
};

export default UiGroupRadio;
