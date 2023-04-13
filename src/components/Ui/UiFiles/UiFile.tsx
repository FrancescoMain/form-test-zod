import { useEffect, useState } from "react";
import UiSelectFile from "./UiSelectFile";
import UiListFiles from "./UiListFiles";
import { PropsUiFile } from "./type";

const UiFile = ({ form, id, onAddFile }: PropsUiFile) => {
  useEffect(() => {
    if (form.files) {
      onAddFile(form.files);
      console.log(form.files);
    }
  }, [form.files]);

  return (
    <div>
      <UiSelectFile id={id} onAddFile={onAddFile} />
      <UiListFiles files={form.files} />
    </div>
  );
};

export default UiFile;
