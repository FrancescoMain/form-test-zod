import { useState } from "react";
import UiHeader from "../Ui/UiHeader/UiHeader";
import UiInput from "../Ui/UiInput/UiInput";
import UiTextArea from "../Ui/UiTextArea/UiTextArea";
import UiSelect from "../Ui/UiSelect/UiSelect";
import { UiGroupCheckbox } from "../Ui/UiCheckbox/UiGroupCheckbox";
import UiGroupRadio from "../Ui/UiRadio/UiGroupRadio";
import UiFile from "../Ui/UiFiles/UiFile";
import { selectValues } from "../Ui/UiSelect/lib";
import { uiGroupCheckBoxValues } from "../Ui/UiCheckbox/lib";
import { uiGroupRadioValues } from "../Ui/UiRadio/lib";
import { FormType } from "./type";

const Form = () => {
  const defaultValue = selectValues.find((item) => item.default)
    ? selectValues.find((item) => item.default)?.id!
    : 0;

  const [form, setForm] = useState<FormType>({
    firstName: "",
    lastName: "",
    description: "",
    country: defaultValue,
    notificationType: [] as number[],
    notficationPush: 0,
    files: null,
  });
  const handleAddFile = (files: FileList) => {
    setForm({ ...form, files: files });
  };

  return (
    <>
      <div>
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">
          Form
        </h3>
      </div>
      <form className="space-y-6">
        <UiHeader title="Profilo" subtitle="Queste info sasasa" />

        <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <UiInput
            label="First Name"
            id="firstName"
            value={form.firstName}
            onChange={(e) => {
              const val = e.target.value;
              setForm({
                ...form,
                firstName: val,
              });
            }}
          />
          <UiInput
            label="Last Name"
            id="lastName"
            value={form.lastName}
            onChange={(e) => {
              const val = e.target.value;
              setForm({
                ...form,
                lastName: val,
              });
            }}
          />
          <UiTextArea
            label="Description"
            id="description"
            value={form.description}
            subtitle="Scrivi Alcune frasi su di te..."
            onChange={(e) => {
              const val = e.target.value;
              setForm({
                ...form,
                description: val,
              });
            }}
          />
          <UiSelect
            defaultValue={defaultValue}
            label="Country"
            id="country"
            values={selectValues}
            onChange={(e) => {
              const val = e.target.value;
              setForm({
                ...form,
                country: Number(val),
              });
            }}
          />
        </div>

        <UiHeader title="Notification" subtitle="Iscriviti all anewsletter" />

        <div className="mt-4 py-4">
          <UiGroupCheckbox
            title="By Email"
            values={uiGroupCheckBoxValues}
            onChange={(selected) => {
              setForm({
                ...form,
                notificationType: selected,
              });
            }}
          />
          <UiGroupRadio
            name="Push-notification"
            title="Push Notification"
            values={uiGroupRadioValues}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const val = event.target.value;
              setForm({
                ...form,
                notficationPush: Number(val),
              });
            }}
          />
          <UiFile
            form={form}
            id="myfile"
            onAddFile={(files) => handleAddFile(files)}
          />
        </div>
      </form>
      <div className="my-4 bg-blue-800 text-white font-bold text-sm p-4 rounded-md shadow-md">
        <pre>
          <code>{JSON.stringify(form, undefined, 2)}</code>
        </pre>
      </div>
    </>
  );
};

export default Form;
