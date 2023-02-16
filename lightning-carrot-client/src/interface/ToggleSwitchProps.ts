export interface ToggleSwitchProps {
  width: string;
  text?: string;
  className?: string;
  toggleProps?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}
