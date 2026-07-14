import { redirect } from "next/navigation";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  console.log(API_URL)

  redirect(`${API_URL}/api/v1/${slug}`);
}