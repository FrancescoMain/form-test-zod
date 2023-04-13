import { UiSelectFileProps } from "./type";

const UiSelectFile = ({ id, onAddFile }: UiSelectFileProps) => {
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    onAddFile(e.target.files!);
  };
  return (
    <>
      <label htmlFor={id}>Select a file:</label>
      <input
        type="file"
        multiple
        id={id}
        name={id}
        onChange={(e) => handleChangeInput(e)}
      />
    </>
  );
};

export default UiSelectFile;
