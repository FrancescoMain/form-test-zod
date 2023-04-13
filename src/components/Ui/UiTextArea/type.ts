import { ChangeEventHandler } from "react";

export interface UiTextAreaProps {
  label: string;
  id: string;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  subtitle: string;
}