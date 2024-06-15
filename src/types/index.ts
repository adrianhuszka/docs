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
  desc: string;
  code: string[];
  showRes: boolean;
};
