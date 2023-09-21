"use client";

import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("managers");

  return (
    <>
      <h1 className="flex w-full justify-center pb-6 pt-8 text-5xl">
        {t("title")}
      </h1>
    </>
  );
}
