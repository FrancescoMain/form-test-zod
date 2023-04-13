import UiSelectFile from "./UiSelectFile";
import UiListFiles from "./UiListFiles";
import { PropsUiFile } from "./type";

const UiFile = ({ id, label, register }: PropsUiFile) => {
  return (
    <div>
      <div className="sm:col-span-6">
        <label
          htmlFor="cover-photo"
          className="block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      </div>
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 botder-gray">
        <div className="space-y-1 text-center">
          <UiListFiles />
          <UiSelectFile register={register} id={id} />
        </div>
      </div>
    </div>
  );
};

export default UiFile;
