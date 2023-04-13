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
import { UiButton } from "../Ui/UiButton/UiButton";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormType } from "./type";

const Form = () => {
  const { register, handleSubmit } = useForm<FormType>();
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data);

  const defaultValue = selectValues.find((item) => item.default)
    ? selectValues.find((item) => item.default)?.id!
    : 0;

  return (
    <>
      <div>
        <h3 className="text-xl leading-6 font-medium text-gray-900 text-center mb-1">
          Form
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <UiHeader title="Profilo" subtitle="Queste info sasasa" />

        <div className="mt-4 py-4 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <UiInput
            register={register("firstName")}
            label="First Name"
            id="firstName"
          />
          <UiInput
            register={register("lastName")}
            label="Last Name"
            id="lastName"
            {...register("lastName")}
          />
          <UiTextArea
            register={register("description")}
            label="Description"
            id="description"
            subtitle="Scrivi Alcune frasi su di te..."
          />
          <UiSelect
            register={register("country")}
            defaultValue={defaultValue}
            label="Country"
            id="country"
            values={selectValues}
          />
        </div>

        <UiHeader title="Notification" subtitle="Iscriviti all anewsletter" />

        <div className="mt-4 py-4">
          <UiGroupCheckbox
            register={register("notificationType")}
            title="By Email"
            values={uiGroupCheckBoxValues}
          />
          <UiGroupRadio
            register={register("notficationPush")}
            name="Push-notification"
            title="Push Notification"
            values={uiGroupRadioValues}
          />
          <UiFile register={register("files")} label="Photo" id="myfile" />
        </div>
        <div className="pt-5">
          <div className="flex justify-end">
            <UiButton
              title="Canell"
              solid
              onClick={() => {
                alert("Cancell");
              }}
            />
            <UiButton
              title="Save"
              onClick={() => {
                alert("Save");
              }}
            />
          </div>
          <button type="submit">INVIA</button>
        </div>
      </form>
    </>
  );
};

export default Form;
