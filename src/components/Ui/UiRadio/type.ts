import { ChangeEventHandler } from "react";

export interface UiGroupRadioProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    values: uiGroupCheckboxValue[];
    title: string;
    name: string;
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
    onChange: ChangeEventHandler<HTMLInputElement>;
    description: string;
    name: string;
}