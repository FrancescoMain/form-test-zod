import { ChangeEventHandler } from "react";

export interface selectValue {
    id: number;
    name: string;
    default?: boolean;
}
  
export  interface UiSelectProps {
    label: string;
    id: string;
    values: selectValue[];
    onChange: ChangeEventHandler<HTMLSelectElement>;
    defaultValue: number;
}