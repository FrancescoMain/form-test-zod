import { UiListFilesProps } from "./type";

const UiListFiles = ({ files }: UiListFilesProps) => {
  return (
    <div>
      {files && files.length > 0 && (
        <ul className="list-disc font-bold">{files.length}</ul>
      )}
    </div>
  );
};

export default UiListFiles;
