'use client';

import {useTranslations} from 'next-intl';
import {NavigationLink} from '@/components/NavigationLink'
import {LanguageLink} from '@/components/LanguageLink'

export default function Home() {
  const t = useTranslations('common');

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-24">
      <nav className="flex gap-3">
        <LanguageLink locale="en">English</LanguageLink>
        <LanguageLink locale="ro">Romana</LanguageLink>
        <LanguageLink locale="ru">Русский</LanguageLink>
      </nav>
      <h1 className="flex w-full justify-center pb-6 pt-8 text-5xl">
        {t('hello')}
      </h1>
    </main>
  )
}
