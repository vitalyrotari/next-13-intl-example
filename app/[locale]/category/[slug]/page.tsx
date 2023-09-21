"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";

interface CategoryPageParams {
  locale: string;
  slug: string;
}

export default function CategoryPage() {
  const params = useParams() as unknown as CategoryPageParams;
  const t = useTranslations("managers");

  return (
    <>
      <h1 className="flex w-full justify-center pb-6 pt-8 text-5xl">
        {params.slug.toLocaleUpperCase()}
      </h1>
      <code>
        <pre>{JSON.stringify(params, null, 2)}</pre>
      </code>
    </>
  );
}
