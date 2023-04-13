import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { FormType } from "../../Form/type";

export interface UiInputProps {
    label: string;
    id: string;
    register: UseFormRegisterReturn<string>

}