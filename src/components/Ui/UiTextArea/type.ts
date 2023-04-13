import { ChangeEventHandler } from "react";
import {  FieldValues, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { FormType } from "../../Form/type";


export interface UiTextAreaProps {
  label: string;
  id: string;
  subtitle: string;
  register: UseFormRegisterReturn<string>
}