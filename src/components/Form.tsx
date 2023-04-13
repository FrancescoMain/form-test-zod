import { useState } from "react";
import UiHeader from "./ui/UiHeader";
import UiInput from "./ui/UiInput";
import UiTextArea from "./ui/UiTextArea";
import UiSelect, { selectValue } from "./ui/UiSelect";
import { UiGroupCheckbox } from "./ui/UiGroupCheckbox";
import UiGroupRadio from "./ui/UiGroupRadio";

const selectValues: selectValue[] = [
  { id: 1, name: "Italia" },
  { id: 2, name: "Francia", default: true },
  { id: 3, name: "Germania" },
];

const uiGroupCheckBoxValues = [
  {
    id: "comments",
    label: "Comments",
    value: 1,
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    id: "candidates",
    label: "Candidates",
    value: 2,
    description: "Get notified when a candidate applies for a job.",
  },
  {
    id: "offers",
    label: "Offers",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

const uiGroupRadioValues = [
  {
    label: "Everything",
    id: "everything",
    value: 1,
    description: "Get notified when someones posts a comment on a posting.",
  },
  {
    label: "Same as email",
    id: "same",
    value: 2,
    description: "Get notified when a candidate applies for a job.",
  },
  {
    label: " No push notifications",
    id: "np-push",
    value: 3,
    description: "Get notified when a candidate accepts or rejects an offer.",
  },
];

const Form = () => {
  const defaultValue = selectValues.find((item) => item.default)
    ? selectValues.find((item) => item.default)?.id!
    : 0;

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    description: "",
    country: defaultValue,
    notificationType: [] as number[],
    notficationPush: 0,
  });

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
