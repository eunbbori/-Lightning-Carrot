import { RefObject } from "react";

export interface InputProps {
  defaultValue?: string;
  required?: boolean;
  width?: string;
  height?: string;
  type: string;
  placeholder?: string;
  accept?: string;
  className: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  refer?: RefObject<HTMLInputElement>;
}
