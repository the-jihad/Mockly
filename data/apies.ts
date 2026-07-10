import {
  TbUsers,
  TbPackage,
  TbArticle,
  TbMessageCircle,
  TbBuilding,
  TbCategory,
} from "react-icons/tb";

import { ApiItem } from "@/types/api";

export const apis: ApiItem[] = [
  {
    title: "Users",
    description:
      "Generate realistic user profiles for testing and development.",
    endpoint: "/api/users",
    records: "100 Records",
    icon: TbUsers,
  },

  {
    title: "Products",
    description:
      "Mock e-commerce products with images, pricing, and details.",
    endpoint: "/api/products",
    records: "500 Records",
    icon: TbPackage,
  },

  {
    title: "Posts",
    description:
      "Sample blog and social media posts for your applications.",
    endpoint: "/api/posts",
    records: "100 Records",
    icon: TbArticle,
  },

  {
    title: "Comments",
    description:
      "Realistic comments for testing discussions and replies.",
    endpoint: "/api/comments",
    records: "500 Records",
    icon: TbMessageCircle,
  },

  {
    title: "Companies",
    description:
      "Mock companies with business information and contacts.",
    endpoint: "/api/companies",
    records: "50 Records",
    icon: TbBuilding,
  },

  {
    title: "Categories",
    description:
      "Product and content categories for your projects.",
    endpoint: "/api/categories",
    records: "20 Records",
    icon: TbCategory,
  },
];
