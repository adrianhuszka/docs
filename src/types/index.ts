import { Session } from "next-auth";
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type WebprogData = {
  category: string;
  categoryTitle: string;
  data: WebprogDataItem[];
};

export type WebprogDataItem = {
  title: string;
  id: string;
  description: string;
  code: string[];
  showRes: boolean;
};

export type CustomSession = Omit<Session, "user"> & {
  [key: string]: any;
};
