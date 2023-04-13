import { ChangeEventHandler } from "react";

export interface CheckboxProps {
    label: string;
    id: string;
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    description: string;
  }

  export interface uiGroupCheckboxValue {
    id: string;
    label: string;
    value: number;
    description: string;
  }
  
  export interface GroupCheckboxProps {
    onChange: (selected: number[]) => void;
    values: uiGroupCheckboxValue[];
    title: string;
  }