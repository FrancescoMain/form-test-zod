import { UiSelectFileProps } from "./type";

const UiSelectFile = ({ id, register }: UiSelectFileProps) => {
  return (
    <>
      <label htmlFor={id}>Select a file:</label>
      <input type="file" multiple id={id} {...register} />
    </>
  );
};

export default UiSelectFile;
