import { FormType } from "../../Form/type";

export interface PropsUiFile {
    id: string;
    onAddFile: (files: FileList) => void;
    form: FormType
}

export interface UiListFilesProps {
  files: FileList | null
}

export interface UiSelectFileProps {
  id: string;
  onAddFile: (files: FileList) => void;
}