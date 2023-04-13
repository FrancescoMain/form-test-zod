import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface selectValue {
    id: number;
    name: string;
    default?: boolean;
}
  
export  interface UiSelectProps {
    label: string;
    id: string;
    values: selectValue[];
    defaultValue: number;
    register: UseFormRegisterReturn<string>

}