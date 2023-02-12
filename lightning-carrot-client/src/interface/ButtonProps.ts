export interface ButtonProps {
  width: string;
  height: string;
  text?: React.ReactNode;
  className: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
