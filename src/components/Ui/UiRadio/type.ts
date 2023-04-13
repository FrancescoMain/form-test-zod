import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface UiGroupRadioProps {
    values: uiGroupCheckboxValue[];
    title: string;
    name: string;
    register: UseFormRegisterReturn<string>

}


interface uiGroupCheckboxValue {
    id: string;
    label: string;
    value: number;
    description: string;
}

export interface UiRadioProps {
    label: string;
    id: string;
    value: number;
    description: string;
    name: string;
    register: UseFormRegisterReturn<string>

}