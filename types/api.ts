import { IconType } from "react-icons";

export interface ApiItem {
  title: string;
  description: string;
  endpoint: string;
  records: string;
  icon: IconType;
}
