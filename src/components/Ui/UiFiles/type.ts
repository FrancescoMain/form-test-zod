import { UseFormRegisterReturn } from "react-hook-form";

export interface PropsUiFile {
    id: string;
    label: string;
    register: UseFormRegisterReturn<string>

    
}

export interface UiSelectFileProps {
  id: string;
  register: UseFormRegisterReturn<string>

}