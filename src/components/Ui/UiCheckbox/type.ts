import { ChangeEventHandler } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

export interface CheckboxProps {
    label: string;
    id: string;
    value: number;
    onChange: ChangeEventHandler<HTMLInputElement>;
    description: string;
    register: UseFormRegisterReturn<string>



  }

  export interface uiGroupCheckboxValue {
    id: string;
    label: string;
    value: number;
    description: string;
  }
  
  export interface GroupCheckboxProps {
    values: uiGroupCheckboxValue[];
    title: string;
    register: UseFormRegisterReturn<string>



  }