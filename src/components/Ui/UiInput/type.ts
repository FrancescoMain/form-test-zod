import { ChangeEventHandler } from "react";

export interface UiInputProps {
    label: string;
    id: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}