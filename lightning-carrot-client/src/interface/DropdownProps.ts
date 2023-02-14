import { MouseEventHandler } from "react";
export interface DropdownProps {
  width: string;
  height: string;
  text: string;
  arrowIcon: React.ReactNode;
  className: string;
  mouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
  mouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
}
export interface RegionDropdownProps {
  mouseEnter?: MouseEventHandler<HTMLDivElement> | undefined;
  mouseLeave?: MouseEventHandler<HTMLDivElement> | undefined;
  className?: string;
}
