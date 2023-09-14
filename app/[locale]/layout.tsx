import {redirect, notFound} from 'next/navigation';
import {createTranslator, NextIntlClientProvider} from 'next-intl';
import {Inter} from 'next/font/google'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const inter = Inter({subsets: ['latin']})

async function getMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}

export async function generateStaticParams() {
  return ['en', 'ro', 'ru'].map((locale) => ({locale}));
}

type LocaleLayoutProps = {
  children: ReactNode;
  params: {locale: string};
};

export async function generateMetadata({params: {locale}}: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  // You can use the core (non-React) APIs when you have to use next-intl
  // outside of components. Potentially this will be simplified in the future
  // (see https://next-intl-docs.vercel.app/docs/next-13/server-components).
  const t = createTranslator({locale, messages});

  return {
    title: t('common.title'),
    description: 'Generated by create next app',
  };
}

export default async function LocaleLayout({
   children,
   params: { locale }
}: LocaleLayoutProps) {
  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}